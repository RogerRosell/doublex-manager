import db from '@/db';
import { TEmulsion } from '@/dataModel/emulsions';
import { notFound } from 'next/navigation';

export async function fetchEmulsions(): Promise<TEmulsion[]> {
  return await db.emulsio.findMany({
    include: {
      Brand: true,
    },
    orderBy: [
      {
        name: 'asc',
      },
    ],
  });
}

export async function createEmulsion(
  data: Omit<TEmulsion, 'id' | 'createdAt' | 'updatedAt' | 'Brand'>
): Promise<TEmulsion> {
  return await db.emulsio.create({
    data: {
      ...data,
    },
  });
}

export async function deleteEmulsion(id: string): Promise<TEmulsion> {
  return await db.emulsio.delete({
    where: {
      id,
    },
  });
}

// //create a prisma query to update an emulsion
// export async function updateEmulsio(
// 	id: string,
// 	data: Partial<Omit<Emulsio, "id" | "createdAt" | "updatedAt">>
// ): Promise<Emulsio> {
// 	return await db.emulsio.update({
// 		where: {
// 			id,
// 		},
// 		data: {
// 			...data,
// 		},
// 	});
// }
