/*
  Warnings:

  - Added the required column `projectId` to the `Tickets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tickets` ADD COLUMN `projectId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Tickets` ADD CONSTRAINT `Tickets_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
