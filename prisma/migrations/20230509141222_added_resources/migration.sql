-- CreateTable
CREATE TABLE `Resource` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `ticketsId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Resource` ADD CONSTRAINT `Resource_ticketsId_fkey` FOREIGN KEY (`ticketsId`) REFERENCES `Tickets`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
