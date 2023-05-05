-- DropForeignKey
ALTER TABLE `userprojects` DROP FOREIGN KEY `UserProjects_employee_id_fkey`;

-- DropForeignKey
ALTER TABLE `userprojects` DROP FOREIGN KEY `UserProjects_project_id_fkey`;

-- AddForeignKey
ALTER TABLE `UserProjects` ADD CONSTRAINT `UserProjects_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserProjects` ADD CONSTRAINT `UserProjects_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `Employee`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
