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
import { loginUser } from "@/services/AuthService";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";

const LoginForm = () => {
  const form = useForm();
  const {
    formState: { isSubmitting },
  } = form;
  const router = useRouter();
  const { setIsLoading } = useUser();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const result = await loginUser(data);
      setIsLoading(true);

      if (result?.success) {
        toast.success(result?.message);
        router.push("/");
      }
    } catch (err: any) {
      toast.error(err?.message);
    }
  };

  return (
    <div className="border-2 text-white border-yellow-800 rounded-xl flex-grow max-w-md mx-auto w-full px-5 py-8">
      <div className="flex items-center space-x-4 my-5">
        <div>
          <h1 className="text-xl font-semibold">Login</h1>
          <p className="font-extralight text-sm">Welcome back!</p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
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

          <Button type="submit" className="mt-3 w-full bg-yellow-600 py-3">
            {isSubmitting ? "Logging...." : "Login"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
