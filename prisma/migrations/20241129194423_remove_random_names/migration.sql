/*
  Warnings:

  - You are about to drop the column `qrCode` on the `ChildRoll` table. All the data in the column will be lost.
  - You are about to drop the column `spoolingDate` on the `ChildRoll` table. All the data in the column will be lost.
  - You are about to drop the column `spoolingDate` on the `ParentRoll` table. All the data in the column will be lost.
  - You are about to drop the `RandomName` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `date` to the `ChildRoll` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `ParentRoll` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "ParentRoll_name_key";

-- AlterTable
ALTER TABLE "ChildRoll" DROP COLUMN "qrCode",
DROP COLUMN "spoolingDate",
ADD COLUMN     "date" DATE NOT NULL;

-- AlterTable
ALTER TABLE "ParentRoll" DROP COLUMN "spoolingDate",
ADD COLUMN     "date" DATE NOT NULL;

-- DropTable
DROP TABLE "RandomName";

-- CreateTable
CREATE TABLE "CameraRoll" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "exposures" INTEGER NOT NULL,
    "parentRollId" INTEGER NOT NULL,

    CONSTRAINT "CameraRoll_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CameraRoll" ADD CONSTRAINT "CameraRoll_parentRollId_fkey" FOREIGN KEY ("parentRollId") REFERENCES "ParentRoll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
