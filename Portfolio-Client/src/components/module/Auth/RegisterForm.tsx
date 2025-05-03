"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { registerUser } from "@/services/AuthService";

const RegisterForm = () => {
  const form = useForm();
  const {
    register,
    formState: { isSubmitting, errors },
  } = form;
  const { setIsLoading } = useUser();
  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("file", data.image[0]);
      formData.append("upload_preset", "book_shop");
      formData.append("cloud_name", "dge3fjctm");
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dge3fjctm/image/upload",
        formData
      );

      const imageUrl = response.data.secure_url;

      const registerData = {
        ...data,
        image: imageUrl,
      };

      const result = await registerUser(registerData);
      setIsLoading(true);

      console.log(result);

      if (result?.success) {
        toast.success(result?.message);
        router.push("/login");
      }
    } catch (err: any) {
      toast.error(err?.message);
    }
  };

  return (
    <div className="border-2 text-white border-yellow-800 rounded-xl flex-grow max-w-md w-full p-5">
      <div className=" my-5">
        <h1 className="text-xl font-semibold">Register</h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="name" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="my-4">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="w-full gap-2">
            <label className="block mb text-sm">Image</label>
            <div className="mt-2">
              <input
                type="file"
                {...register("image", { required: true })}
                className="w-full p-2 border rounded-md border-yellow-800 text-yellow-500"
              />
              {errors.image && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>
          </div>

          <Button type="submit" className="mt-4 w-full bg-yellow-600 py-3">
            {isSubmitting ? "Registering...." : "Register"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
