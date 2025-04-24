import {
    FormControl,
    FormDescription,
    FormItem,
    FormLabel,
    FormMessage,
  } from "../ui/form";
import { Textarea } from "../ui/textarea";
  
  const FormTextbox = ({
    placeholder,
    description,
    field,
    label
  }: {
    placeholder: string;
    description: string;
    label:string
    field: any;
  }) => {
    return (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Textarea placeholder={placeholder} {...field} />
        </FormControl>
        <FormDescription>{description}</FormDescription>
        <FormMessage />
      </FormItem>
    );
  };
  
  export default FormTextbox ;
  