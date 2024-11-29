"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useRef, useActionState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { ParentRollFormSchema, TParentRoll } from "@/dataModel/ParentRoll";
import { onSubmitAction } from "@/actions/actions";
// import { toast } from '@/hooks/use-toast';
// import { ToastAction } from "@/components/ui/toast"

type FormState = {
  message: string;
  fields?: TParentRoll;
  issues?: string[];
};

export const Forms = ({ formType, name }:{formType: string, name: string}) => {
  console.log("formType >> ", formType);
  const initialState: FormState = {
    message: "",
    fields: { name: name, purchaseDate: "yyyy-MM-dd"  },
    issues: [],
  }
  const [state, formAction] = useActionState(onSubmitAction, initialState);
  const form = useForm<z.output<typeof ParentRollFormSchema>>({
    resolver: zodResolver(ParentRollFormSchema),
    defaultValues: {...initialState.fields},
  });

  // const showMessage = (message: string) => {
  //   toast({
  //     title: "Uh oh! Something went wrong.",
  //     description: message,
  //     action: (
  //       <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
  //     ),
  //   })
  // }

  // if (state?.message !== "" && !state.issues) showMessage(state.message);
  // if (state?.issues) showMessage(state.issues.join(", "));

  
  // console.log("state >> ", state);

  const formRef = useRef<HTMLFormElement>(null);

return (
  <Form {...form}>
     {state?.message !== "" && !state.issues && (      
        <div className="text-red-500">{state.message}</div>
      )}
      {state?.issues && (
        <div className="text-red-500">
          <ul>
            {state.issues.map((issue) => (
              <li key={issue} className="flex gap-1">
                <X fill="red" />
                {issue}
              </li>
            ))}
          </ul>
        </div>
      )}
      <form
        ref={formRef}
        className="space-y-8"
        action={formAction}
      >
        <div className="flex flex-col gap-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription>Random name for the roll.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
          control={form.control}
          name="purchaseDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date</FormLabel>
              <input type="date" {...field} value={field.value}/>
              <FormDescription>
                Purchase date of the roll.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
          </div>
          <Button type="submit">Submit</Button>
      </form>
      </Form>
)
}