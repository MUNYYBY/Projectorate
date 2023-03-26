/*
  Warnings:

  - You are about to drop the column `designationId` on the `employee` table. All the data in the column will be lost.
  - Added the required column `designation` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Made the column `expertise` on table `employee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `date_of_joining` on table `employee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `years_of_experience` on table `employee` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `designation` MODIFY `title` VARCHAR(191) NOT NULL DEFAULT 'associate';

-- AlterTable
ALTER TABLE `employee` DROP COLUMN `designationId`,
    ADD COLUMN `designation` VARCHAR(191) NOT NULL,
    ADD COLUMN `role` VARCHAR(191) NOT NULL,
    MODIFY `expertise` VARCHAR(191) NOT NULL,
    MODIFY `date_of_joining` VARCHAR(191) NOT NULL,
    MODIFY `years_of_experience` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Role` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL DEFAULT 'Team Member',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
