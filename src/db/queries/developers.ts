import db from "..";
import { notFound } from "next/navigation";
import { TDeveloper } from "@/dataModel/developers";


//create a prisma query to fetch all brands
export async function fetchDevelopers(): Promise<TDeveloper[]> {
	return await db.developer.findMany({
		include: {
			Brand: true,
		},
		orderBy: [
			{
				name: "desc",
			},
		],
	});
}

export async function createDeveloper(data: Omit<TDeveloper, "id" | "Brand" | "createdAt">): Promise<TDeveloper> {
	return await db.developer.create({
		data: {
			...data,
		},
	});
}

export async function deleteDeveloper(id: string): Promise<TDeveloper> {
	return await db.developer.delete({
		where: {
			id,
		},
	});
}

