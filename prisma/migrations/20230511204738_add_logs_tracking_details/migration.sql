-- AlterTable
ALTER TABLE `logs` ADD COLUMN `employee_name` VARCHAR(191) NULL,
    ADD COLUMN `project_name` VARCHAR(191) NULL,
    ADD COLUMN `team_name` VARCHAR(191) NULL,
    ADD COLUMN `ticket_name` VARCHAR(191) NULL;
