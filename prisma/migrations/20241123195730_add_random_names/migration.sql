-- CreateTable
CREATE TABLE "RandomName" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isUsed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RandomName_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RandomName_name_key" ON "RandomName"("name");
