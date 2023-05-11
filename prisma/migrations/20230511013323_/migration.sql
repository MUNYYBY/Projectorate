-- DropForeignKey
ALTER TABLE `tickets` DROP FOREIGN KEY `Tickets_ownerId_fkey`;

-- AlterTable
ALTER TABLE `tickets` MODIFY `ownerId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Tickets` ADD CONSTRAINT `Tickets_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
