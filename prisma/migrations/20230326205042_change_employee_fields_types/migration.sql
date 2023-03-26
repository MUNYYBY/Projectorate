/*
  Warnings:

  - You are about to alter the column `designation` on the `employee` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `role` on the `employee` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `employee` MODIFY `designation` INTEGER NOT NULL,
    MODIFY `role` INTEGER NOT NULL;
