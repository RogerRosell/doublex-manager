"use server";

import { ParentRollFormSchema, TParentRoll } from '@/dataModel/ParentRoll';
import { createParentRoll } from "@/db/queries/parent"

export type FormState = {
  message: string;
  fields?: { name: string, purchaseDate: Date | string };
  issues?: string[];
};

export const getRandomName = async () => {
  try {
    const randomUser = await fetch("https://randomuser.me/api/");
    const data = await randomUser.json();
    const firstName = data.results[0].name.first;
    const lastName = data.results[0].name.last;
    // console.log(`${firstName} ${lastName}`);
    return `${firstName} ${lastName}`;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return 'Unknown Name';
  }
}

export async function onSubmitAction(
  prevState: FormState,
  data: FormData
): Promise<FormState> {  
  const formData = Object.fromEntries(data);
  const parsed = ParentRollFormSchema.safeParse(formData);

  if (!parsed.success) {
    const fields = {
      name: formData.name.toString(),
      purchaseDate: new Date(formData.purchaseDate as string).toISOString(),
    };
    return {
      message: "Invalid form data",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }
  
  await createParentRoll({name: parsed.data.name, date: new Date(parsed.data.purchaseDate as string).toISOString(), qrCodeUrl: "" })
   .then((value: TParentRoll) => {
      if (typeof value.id === "number") {
        return { message: "New Parent roll created" };
      }
   })
   .catch((err) => {
    return { message: `Error: ${err}` };
   })

   return { message: "New Parent roll created"}
  
}