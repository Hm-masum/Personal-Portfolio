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
import { updateEducation } from "@/services/Education";
import { IEducation } from "@/type/education";

const UpdateEducationForm = ({
  educationData,
}: {
  educationData: IEducation;
}) => {
  const form = useForm({
    defaultValues: {
      degree: educationData?.degree,
      institution: educationData?.institution,
      educationYear: educationData?.educationYear,
      location: educationData?.location,
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await updateEducation(data, educationData?._id);
      if (res.success) {
        toast.success("Education Update Successfully");
      }
    } catch (err: any) {
      toast.error(err?.message);
    }
  };

  return (
    <div className="border-2 border-gray-300 rounded-xl flex-grow w-full p-8">
      <SectionTitle
        title="Update"
        colorWord="Education"
        subtitle="Share Your Teaching Tips and Insights with Learners Worldwide."
      />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row items-center gap-5 w-full">
            <FormField
              control={form.control}
              name="degree"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Degree</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="institution"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel> Institution</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-5 w-full my-5">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="educationYear"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel> Education Year</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full bg-purple-700 py-3">
            {isSubmitting ? "Updating...." : "Update"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UpdateEducationForm;
