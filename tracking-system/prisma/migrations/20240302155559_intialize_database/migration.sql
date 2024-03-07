-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `email_verified_at` DATETIME(3) NULL,
    `name` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `remember_token` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Project` (
    `proId` INTEGER NOT NULL AUTO_INCREMENT,
    `proName` VARCHAR(191) NOT NULL,
    `proBrief` VARCHAR(191) NOT NULL,
    `proDescription` VARCHAR(191) NOT NULL,
    `proStatus` VARCHAR(191) NOT NULL,
    `proCreatedBy` INTEGER NOT NULL,
    `proStartDate` DATETIME(3) NOT NULL,
    `proEndDate` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`proId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Task` (
    `taskId` INTEGER NOT NULL AUTO_INCREMENT,
    `taskName` VARCHAR(191) NOT NULL,
    `taskDescription` VARCHAR(191) NOT NULL,
    `taskStatus` VARCHAR(191) NOT NULL,
    `taskCreatedBy` INTEGER NOT NULL,
    `taskStartDate` DATETIME(3) NOT NULL,
    `taskEndDate` DATETIME(3) NOT NULL,
    `proId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`taskId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
