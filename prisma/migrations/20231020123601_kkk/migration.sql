/*
  Warnings:

  - The `images` column on the `books` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "books" DROP COLUMN "images",
ADD COLUMN     "images" TEXT[];
