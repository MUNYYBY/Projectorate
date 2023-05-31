-- AlterTable
ALTER TABLE `project` ADD COLUMN `projectStatusId` INTEGER NULL;

-- AlterTable
ALTER TABLE `teams` ADD COLUMN `teamStatusId` INTEGER NULL;

-- CreateTable
CREATE TABLE `ProjectStatus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TeamStatus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_projectStatusId_fkey` FOREIGN KEY (`projectStatusId`) REFERENCES `ProjectStatus`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Teams` ADD CONSTRAINT `Teams_teamStatusId_fkey` FOREIGN KEY (`teamStatusId`) REFERENCES `TeamStatus`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
