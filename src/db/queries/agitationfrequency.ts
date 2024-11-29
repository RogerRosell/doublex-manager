import db from "..";
import { TAgitationFrequency } from '@/dataModel/agitationFrequency';

export async function fetchAgitationfrequencies(): Promise<TAgitationFrequency[]> {
	return await db.agitationFrequency.findMany({
		orderBy: [
			{
				id: "asc",
			},
		],
	});
}

export async function createAgitationFrequency(data: Omit<TAgitationFrequency, "id" | "createdAt">): Promise<TAgitationFrequency> {
	return await db.agitationFrequency.create({
		data: {
			...data,
		},
	});
}

export async function deleteAgitationFrequency(id: string): Promise<TAgitationFrequency> {
	return await db.agitationFrequency.delete({
		where: {
			id,
		},
	});
}