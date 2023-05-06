/*
  Warnings:

  - You are about to drop the column `projectId` on the `tickets` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `tickets` DROP FOREIGN KEY `Tickets_projectId_fkey`;

-- AlterTable
ALTER TABLE `tickets` DROP COLUMN `projectId`;
