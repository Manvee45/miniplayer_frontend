"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";

import FormInput from "./form_items/FormInput";
import FormTextbox from "./form_items/FormTextbox";
import { Loader2 } from "lucide-react";
import { createSinger } from "@/http";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string().min(4, {
    message: "Description must be at least 10 characters",
  }),
  genre: z.string().min(2, {
    message: "Description must be at least 2 characters",
  }),
  language: z.string().min(4, {
    message: "Correct Language",
  }),
});

export function SingerForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      language: "",
      genre: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createSinger,
    onSuccess: (data) => {
      toast.success("Singer has been created", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
      })
    },
    onError: (err) => {
      console.log("response data is :", err);
      toast.error("Error in creating singer", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        className:"bg-red-500"
      })
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormInput
              placeholder="name"
              description="This is Song's Name ."
              label="Name"
              field={field}
            />
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormTextbox
              placeholder="Type your description here."
              description=" This is your Description."
              label="Description"
              field={field}
            />
          )}
        />
        <FormField
          control={form.control}
          name="genre"
          render={({ field }) => (
            <FormInput
              placeholder="Type your genre here."
              description=" This is your Genre."
              label="Genre"
              field={field}
            />
          )}
        />
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormInput
              placeholder="Type your language here."
              description="This is your Language."
              label="Language"
              field={field}
            />
          )}
        />

        {isPending ? (
          <Button disabled>
            <Loader2 className="animate-spin" />
            Please wait
          </Button>
        ) : (
          <Button type="submit">Submit</Button>
        )}
      </form>
    </Form>
  );
}
