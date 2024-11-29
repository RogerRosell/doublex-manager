/*
  Warnings:

  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_postId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropTable
DROP TABLE "Comment";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "ParentRoll" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "spoolingDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ParentRoll_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChildRoll" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "spoolingDate" TIMESTAMP(3) NOT NULL,
    "qrCode" TEXT NOT NULL,
    "parentRollId" INTEGER NOT NULL,

    CONSTRAINT "ChildRoll_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ParentRoll_name_key" ON "ParentRoll"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ChildRoll_name_parentRollId_key" ON "ChildRoll"("name", "parentRollId");

-- AddForeignKey
ALTER TABLE "ChildRoll" ADD CONSTRAINT "ChildRoll_parentRollId_fkey" FOREIGN KEY ("parentRollId") REFERENCES "ParentRoll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
