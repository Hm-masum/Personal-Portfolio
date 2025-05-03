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
import {
  FieldValues,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { Plus } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import SectionTitle from "@/components/shared/SectionTitle";
import { createCertification } from "@/services/Certification";

const CreateCertificationForm = () => {
  const form = useForm({
    defaultValues: {
      title: "",
      image: null,
      achievements: [{ value: "" }],
    },
  });

  const {
    register,
    formState: { isSubmitting, errors },
  } = form;

  const { append: appendAchievement, fields: achievementFields } =
    useFieldArray({
      control: form.control,
      name: "achievements",
    });

  const addAchievement = () => {
    appendAchievement({ value: "" });
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const achievements = data?.achievements.map(
        (achievement: { value: string }) => achievement.value
      );

      const formData = new FormData();
      formData.append("file", data.image[0]);
      formData.append("upload_preset", "book_shop");
      formData.append("cloud_name", "dge3fjctm");
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dge3fjctm/image/upload",
        formData
      );

      const imageUrl = response.data.secure_url;

      const certificationData = {
        ...data,
        achievements,
        image: imageUrl,
      };
      const res = await createCertification(certificationData);
      if (res.success) {
        toast.success("Certification Create Successfully");
      }
    } catch (err: any) {
      toast.error(err?.message);
    }
  };

  return (
    <div className="border-2 border-gray-300 rounded-xl flex-grow w-full p-5">
      <SectionTitle
        title="Create"
        colorWord="Certification"
        subtitle="Share Your Teaching Tips and Insights with Learners Worldwide."
      />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row items-center gap-5 w-full">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
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
                  className="w-full p-2 border rounded-md border-gray-300 text-gray-900"
                />
                {errors.image && (
                  <span className="text-red-500 text-xs">
                    This field is required
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="py-5">
            <div className="flex justify-between items-center border-t border-b py-2 my-5">
              <p className="text-primary font-bold text-xl">Achievement</p>
              <Button
                variant="outline"
                className="size-10"
                onClick={addAchievement}
                type="button"
              >
                <Plus className="text-primary" />
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {achievementFields.map((achievementField, index) => (
                <div key={achievementField.id}>
                  <FormField
                    control={form.control}
                    name={`achievements.${index}.value`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Achievements {index + 1}</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value || ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
            </div>
          </div>

          <Button type="submit" className="mt-3 w-full bg-purple-700 py-3">
            {isSubmitting ? "Creating...." : "Create"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateCertificationForm;
