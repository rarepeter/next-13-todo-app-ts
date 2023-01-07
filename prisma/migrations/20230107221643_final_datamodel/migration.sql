-- CreateEnum
CREATE TYPE "USER_ROLES" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL,
    "role" "USER_ROLES"[],

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);
