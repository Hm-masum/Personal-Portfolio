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
import { toast } from "sonner";
import SectionTitle from "@/components/shared/SectionTitle";
import { updateSkill } from "@/services/Skill";
import axios from "axios";
import { ISkill } from "@/type/skill";

const UpdateSkillForm = ({ skillData }: { skillData: ISkill }) => {
  const form = useForm({
    defaultValues: {
      image: skillData.image,
      types: skillData.types,
      name: skillData.name,
    },
  });

  const {
    register,
    formState: { isSubmitting, errors },
  } = form;

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

      const updateData = {
        ...data,
        image: imageUrl,
      };

      const res = await updateSkill(updateData, skillData._id);
      if (res.success) {
        toast.success("Skill Updated Successfully");
      }
    } catch (err: any) {
      toast.error(err?.message);
    }
  };

  return (
    <div className="border-2 border-gray-300 rounded-xl flex-grow w-full p-8">
      <SectionTitle
        title="Update"
        colorWord="Skill"
        subtitle="Share Your Teaching Tips and Insights with Learners Worldwide."
      />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row items-center gap-5 w-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="types"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Types</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full my-5 gap-2">
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

          <Button type="submit" className="w-full bg-purple-700 py-3">
            {isSubmitting ? "Updating...." : "Update"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UpdateSkillForm;
