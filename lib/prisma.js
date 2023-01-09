// lib/prisma.ts
import { prisma, PrismaClient } from "@prisma/client";

let PrismaDB;

if (process.env.NODE_ENV === "production") {
  PrismaDB = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  PrismaDB = global.prisma;
}

export default PrismaDB;
