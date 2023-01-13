-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_adminId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_superAdminId_fkey`;

-- AlterTable
ALTER TABLE `user` MODIFY `adminId` INTEGER NULL,
    MODIFY `employeeId` INTEGER NULL,
    MODIFY `superAdminId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_superAdminId_fkey` FOREIGN KEY (`superAdminId`) REFERENCES `SuperAdmin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
