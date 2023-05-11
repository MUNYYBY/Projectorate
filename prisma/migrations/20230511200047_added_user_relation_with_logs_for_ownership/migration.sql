-- DropForeignKey
ALTER TABLE `logs` DROP FOREIGN KEY `Logs_projectId_fkey`;

-- DropForeignKey
ALTER TABLE `logs` DROP FOREIGN KEY `Logs_teamId_fkey`;

-- DropForeignKey
ALTER TABLE `logs` DROP FOREIGN KEY `Logs_ticketId_fkey`;

-- AlterTable
ALTER TABLE `logs` ADD COLUMN `ownerId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Logs` ADD CONSTRAINT `Logs_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Logs` ADD CONSTRAINT `Logs_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `Teams`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Logs` ADD CONSTRAINT `Logs_ticketId_fkey` FOREIGN KEY (`ticketId`) REFERENCES `Tickets`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Logs` ADD CONSTRAINT `Logs_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
