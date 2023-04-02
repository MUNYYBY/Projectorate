/*
  Warnings:

  - You are about to drop the column `password` on the `employee` table. All the data in the column will be lost.
  - Made the column `email` on table `employee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `role` on table `employee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `role` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `designation` MODIFY `title` VARCHAR(191) NOT NULL DEFAULT 'Associate';

-- AlterTable
ALTER TABLE `employee` DROP COLUMN `password`,
    MODIFY `email` VARCHAR(191) NOT NULL,
    MODIFY `role` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `status` VARCHAR(191) NOT NULL DEFAULT 'Active',
    MODIFY `role` INTEGER NOT NULL;
