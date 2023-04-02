/*
  Warnings:

  - You are about to drop the column `designationId` on the `employee` table. All the data in the column will be lost.
  - You are about to drop the column `roleId` on the `employee` table. All the data in the column will be lost.
  - You are about to drop the column `roleId` on the `user` table. All the data in the column will be lost.
  - Added the required column `designation` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `employee` DROP FOREIGN KEY `Employee_designationId_fkey`;

-- DropForeignKey
ALTER TABLE `employee` DROP FOREIGN KEY `Employee_roleId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_roleId_fkey`;

-- AlterTable
ALTER TABLE `employee` DROP COLUMN `designationId`,
    DROP COLUMN `roleId`,
    ADD COLUMN `designation` INTEGER NOT NULL,
    ADD COLUMN `role` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `roleId`,
    ADD COLUMN `role` INTEGER NOT NULL;
