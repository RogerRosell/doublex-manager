import { Forms } from '@/components/forms';
// import { MailForm } from "./MailForm";
import { getRandomName } from "@/actions/actions";  

export default async function Home() {
  const name: string = await getRandomName();
  return (
    <div className="max-w-3xl mx-auto pt-5">
      {name && (
        <Forms formType="ParentRoll" name={name} />
        )}      
      {/* <MailForm /> */}
    </div>
  );
}