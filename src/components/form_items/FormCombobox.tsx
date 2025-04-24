"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

export function FormCombobox({
  optionList,
  togglefun,
  selectedList,
  placeholder,
  description,
  label
}: {
  optionList: any[];
  togglefun: any;
  selectedList: any[];
  placeholder: string;
  description: string;
  label:string
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between overflow-hidden"
            >
              select options
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput  placeholder={placeholder} />
              <CommandList>
                <CommandEmpty>No option found.</CommandEmpty>
                <CommandGroup>
                  {optionList.map((option) => (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      onSelect={(currentValue) => {
                        const valueID = optionList.find(
                          (option) => option.label == currentValue
                        ).value;
                        togglefun(valueID);
                      }}
                    >
                      {option.label}
                      <Check
                        className={cn(
                          "ml-auto",
                          selectedList.includes(option.value)
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </FormControl>
      <FormDescription>{description}</FormDescription>
      <FormMessage />
    </FormItem>
  );
}
