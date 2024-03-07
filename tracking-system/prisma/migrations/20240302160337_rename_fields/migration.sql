/*
  Warnings:

  - You are about to drop the column `email_verified_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `remember_token` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `email_verified_at`,
    DROP COLUMN `remember_token`,
    ADD COLUMN `emailVerifiedAt` DATETIME(3) NULL,
    ADD COLUMN `remembeToken` VARCHAR(191) NULL;
