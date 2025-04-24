"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  url: z.string().min(4, {
    message: "Url must be a mp3 file",
  }),
  playlist_ids: z
    .array(z.number())
    .min(1, "Please select at least one playlist."),
  singer_ids: z.array(z.number()).min(1, "Please select at least one singer."),
});

import { FormCombobox } from "./form_items/FormCombobox";
import FormInput from "./form_items/FormInput";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createSong, getPlaylists, getSingers } from "@/http";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export function SongForm() {
  const { data: singers } = useQuery({
    queryKey: ["singers"],
    queryFn: getSingers,
  });

  const { data: playlists } = useQuery({
    queryKey: ["playlists"],
    queryFn: getPlaylists,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      url: "",
      playlist_ids: [],
      singer_ids: [],
    },
  });

  const toggleSingerID = (cuurentid: number) => {
    const current = form.getValues("singer_ids");
    if (current.includes(cuurentid)) {
      form.setValue(
        "singer_ids",
        current.filter((l) => l !== cuurentid),
        { shouldValidate: true }
      );
    } else {
      form.setValue("singer_ids", [...current, cuurentid], {
        shouldValidate: true,
      });
    }
  };

  const togglePlaylistID = (cuurentid: number) => {
    const current = form.getValues("playlist_ids");
    if (current.includes(cuurentid)) {
      form.setValue(
        "playlist_ids",
        current.filter((l) => l !== cuurentid),
        { shouldValidate: true }
      );
    } else {
      form.setValue("playlist_ids", [...current, cuurentid], {
        shouldValidate: true,
      });
    }
  };

  const selectedsingers = form.watch("singer_ids");
  const selectedplaylists = form.watch("playlist_ids");

  const { mutate, isPending } = useMutation({
    mutationFn: createSong,
    onSuccess: (data) => {
      toast.success("Song has been created", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
      })
    },  onError: (err) => {
      console.log("response data is :", err);
      toast.error("Error in creating Song", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        className:"bg-red-500"
      })
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values);
    console.log("Required Data", values);
    // console.log(singervalues)

    // axios.post("http://localhost:3000/song", values).then((res) => {
    //   console.log(res.data);
    // });
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
              description="This is Song's Name "
              label="Name"
              field={field}
            />
          )}
        />

        {singers && (
          <FormField
            control={form.control}
            name="singer_ids"
            render={() => (
              <FormCombobox
                togglefun={toggleSingerID}
                optionList={singers.map((singer) => ({
                  label: singer.name,
                  value: singer.id,
                }))}
                selectedList={selectedsingers}
                label="Select Singers"
                placeholder="Singer"
                description="This is for selecting Singers"
              />
            )}
          />
        )}

        {playlists && (
          <FormField
            control={form.control}
            name="singer_ids"
            render={() => (
              <FormCombobox
                togglefun={togglePlaylistID}
                optionList={playlists.map((playlist) => ({
                  label: playlist.title,
                  value: playlist.id,
                }))}
                selectedList={selectedplaylists}
                label="Select Playlists"
                placeholder="Playlist"
                description="This is for selecting Playlists"
              />
            )}
          />
        )}

        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormInput
              placeholder="url"
              description="This is your URL"
              label="URL"
              field={field}
            />
          )}
        />

        {/* <FormField
          control={form.control}
          name="singer_ids"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Singer's ID</FormLabel>
              <FormControl>
                ComboboxDemo
              </FormControl>
              <FormDescription>This is your Singer ID.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        {/* <FormField
          control={form.control}
          name="playlist_ids"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Playlist Id</FormLabel>
              <FormControl>
                <Input
                  placeholder="playlist id"
                  value={field.value?.join(", ") ?? ""}
                  onChange={(e) => {
                    const values = e.target.value
                      .split(",")
                      .map((v) => parseInt(v.trim()))
                      .filter((v) => !isNaN(v));
                    field.onChange(values);
                  }}
                />
              </FormControl>
              <FormDescription>This is your Playlist ID</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}

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
