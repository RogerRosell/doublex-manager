import db from "..";
import { TAgitation } from '@/dataModel/agitations';

// 
// //create a prisma query to fetch all agitations
// export async function fetchAgitations(): Promise<TAgitation[]> {
//   return await db.agitation.findMany({
//     orderBy: [
//       {
//         initial: "desc",
//       },
//     ],
//   });
// }