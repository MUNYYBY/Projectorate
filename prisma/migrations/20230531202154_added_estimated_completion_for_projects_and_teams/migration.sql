/*
  Warnings:

  - Added the required column `estimated_completion` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estimated_completion` to the `Teams` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `project` ADD COLUMN `estimated_completion` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `teams` ADD COLUMN `estimated_completion` VARCHAR(191) NOT NULL;
