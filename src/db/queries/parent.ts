import db from "@/db"
import { TParentRoll } from '@/dataModel/ParentRoll'

export async function createParentRoll(data: Omit<TParentRoll, "id">): Promise<TParentRoll> {
  console.log("data >> ", data)
  
	return await db.parentRoll.create({
		data: {
			...data,
		},
	});
}