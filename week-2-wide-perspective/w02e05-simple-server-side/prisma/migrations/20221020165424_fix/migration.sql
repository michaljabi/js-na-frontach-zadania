/*
  Warnings:

  - You are about to drop the column `summary` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "summary";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "price";
