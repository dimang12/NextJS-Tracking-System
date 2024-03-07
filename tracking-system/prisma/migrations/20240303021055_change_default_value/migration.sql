/*
  Warnings:

  - You are about to alter the column `proStatus` on the `Project` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.
  - You are about to alter the column `taskStatus` on the `Task` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `Project` MODIFY `proDescription` VARCHAR(191) NULL,
    MODIFY `proStatus` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `proCreatedBy` INTEGER NULL,
    MODIFY `proStartDate` DATETIME(3) NULL,
    MODIFY `proEndDate` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Task` MODIFY `taskDescription` VARCHAR(191) NULL,
    MODIFY `taskStatus` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `taskCreatedBy` INTEGER NULL,
    MODIFY `taskStartDate` DATETIME(3) NULL,
    MODIFY `taskEndDate` DATETIME(3) NULL;
