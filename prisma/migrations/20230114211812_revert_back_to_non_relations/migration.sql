/*
  Warnings:

  - You are about to drop the column `adminId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `employeeId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `superAdminId` on the `user` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_adminId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_superAdminId_fkey`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `adminId`,
    DROP COLUMN `employeeId`,
    DROP COLUMN `superAdminId`;
