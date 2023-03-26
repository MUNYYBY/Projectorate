/*
  Warnings:

  - You are about to alter the column `years_of_experience` on the `employee` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `employee` MODIFY `years_of_experience` INTEGER NOT NULL;
