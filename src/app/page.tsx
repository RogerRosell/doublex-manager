import { Forms } from '@/components/forms';
import { getRandomName } from "@/actions/actions";

export default async function Home() {
  const name: string = await getRandomName();
  return (
    <div className="max-w-3xl mx-auto pt-5 flex justify-center items-center h-screen">
      {name && (
        <div className="max-w-[250px]">
          <Forms formType="ParentRoll" name={name} />
        </div>
      )}
    </div>
  );
}