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
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import SectionTitle from "@/components/shared/SectionTitle";
import { createProject } from "@/services/Project";

const CreateProjectForm = () => {
  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      image: null,
      features: [{ value: "" }],
      technologies: [{ value: "" }],
      frontEndRepo: "",
      backEndRepo: "",
      liveLink: "",
    },
  });

  const {
    register,
    formState: { isSubmitting, errors },
  } = form;

  const { append: appendFeature, fields: featureFields } = useFieldArray({
    control: form.control,
    name: "features",
  });

  const addFeature = () => {
    appendFeature({ value: "" });
  };

  const { append: appendTechnology, fields: technologyFields } = useFieldArray({
    control: form.control,
    name: "technologies",
  });

  const addTechnology = () => {
    appendTechnology({ value: "" });
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const features = data?.features.map(
        (feature: { value: string }) => feature.value
      );
      const technologies = data?.technologies.map(
        (technology: { value: string }) => technology.value
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

      const projectData = {
        ...data,
        features,
        technologies,
        image: imageUrl,
        showHome: "no",
      };
      const res = await createProject(projectData);
      if (res.success) {
        toast.success("Project Create Successfully");
      }
    } catch (err: any) {
      toast.error(err?.message);
    }
  };

  return (
    <div className="border-2 border-gray-300 rounded-xl flex-grow w-full p-5">
      <SectionTitle
        title="Create"
        colorWord="Project"
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

            <FormField
              control={form.control}
              name="liveLink"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Live Link</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex my-5 flex-col md:flex-row items-center gap-5 w-full">
            <FormField
              control={form.control}
              name="frontEndRepo"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Front End Repo</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="backEndRepo"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Back End Repo</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

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

          <div className="py-5 my-5">
            <div className="flex justify-between items-center border-t border-b py-2 my-5">
              <p className="text-primary font-bold text-xl">Features</p>
              <Button
                variant="outline"
                className="size-10"
                onClick={addFeature}
                type="button"
              >
                <Plus className="text-primary" />
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {featureFields.map((featureField, index) => (
                <div key={featureField.id}>
                  <FormField
                    control={form.control}
                    name={`features.${index}.value`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Features {index + 1}</FormLabel>
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

          <div className="py-5">
            <div className="flex justify-between items-center border-t border-b py-2 my-5">
              <p className="text-primary font-bold text-xl">Technologies</p>
              <Button
                variant="outline"
                className="size-10"
                onClick={addTechnology}
                type="button"
              >
                <Plus className="text-primary" />
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {technologyFields.map((technologyField, index) => (
                <div key={technologyField.id}>
                  <FormField
                    control={form.control}
                    name={`technologies.${index}.value`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Technologies {index + 1}</FormLabel>
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

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="my-4">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    className="h-28 resize-none"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="mt-5 w-full bg-purple-700 py-3">
            {isSubmitting ? "Creating...." : "Create"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateProjectForm;
