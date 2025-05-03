"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { AiTwotoneMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { TiLocationOutline } from "react-icons/ti";
import { toast } from "sonner";
import { LucideSendHorizonal } from "lucide-react";
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
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ContactComp = () => {
  const form = useForm();
  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      toast.success("Thanks for messaging");
    } catch (err: any) {
      toast.error(err?.message);
    }
  };

  return (
    <div className="my-16 text-yellow-500 space-y-6">
      <h2 className="text-2xl md:text-4xl font-semibold text-center my-10">
        Contact
      </h2>
      <div className="flex flex-col md:flex-row justify-around gap-6">
        <div className="space-y-5 md:w-[30%]">
          <div className="flex gap-4 items-center bg-zinc-900 p-4 rounded-lg">
            <FaPhoneAlt className="text-4xl" />
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold">Call Me</h2>
              <p>01817267861</p>
            </div>
          </div>
          <div className="flex gap-4 items-center bg-zinc-900 p-4 rounded-lg">
            <AiTwotoneMail className="text-4xl" />
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold">Email Me</h2>
              <p>hhmasum88@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-4 items-center bg-zinc-900 p-4 rounded-lg">
            <TiLocationOutline className="text-4xl" />
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold">Location</h2>
              <p>Chattogram, Bangladesh</p>
            </div>
          </div>
        </div>

        <div className="md:w-[50%]">
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
                name="Email"
                render={({ field }) => (
                  <FormItem className="my-4">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="my-4">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        className="h-20 resize-none"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="mt-3 border border-yellow-500 bg-black text-yellow-500 hover:bg-yellow-500 hover:text-black h-10"
              >
                Send Message <LucideSendHorizonal />
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactComp;
