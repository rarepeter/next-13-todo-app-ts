/*
  Warnings:

  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "roles" "USER_ROLES"[];

-- DropTable
DROP TABLE "Role";
