-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Employed', 'SelfEmployed', 'Entrepreneur', 'Unemployed');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "userName" VARCHAR(10) NOT NULL,
    "fullName" VARCHAR(20) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "interest" VARCHAR(20) NOT NULL,
    "yearsOfExperience" TIMESTAMP(3) NOT NULL,
    "category" "Category" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
