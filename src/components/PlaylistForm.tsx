"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";

import FormInput from "./form_items/FormInput";
import FormTextbox from "./form_items/FormTextbox";
import { useMutation } from "@tanstack/react-query";
import { createPlaylist } from "@/http";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const formSchema = z.object({
  title: z.string().min(4, {
    message: "Title must be at least 4 characters.",
  }),
  description: z.string().min(4, {
    message: "Description must be at least 4 characters.",
  }),
});

export function PlaylistForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createPlaylist,
    onSuccess: (data) => {
      toast.success("Playlist has been created", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
      });
    },
    onError: (err) => {
      console.log("response data is :", err);
      toast.error("error in creating playlist", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
      });
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Playlist Form</CardTitle>
        <CardDescription>Fill this form for create a playlist</CardDescription>
      </CardHeader>
      <CardContent>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormInput
                field={field}
                placeholder="This is your playlist title"
                label="Title"
                description="this is title name"
              />
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormTextbox
                field={field}
                placeholder="Type your description here."
                label="Description"
                description="This is your Playlist's Description."
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
      </CardContent>
     
    </Card>
  );
}
