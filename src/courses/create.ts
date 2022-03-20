import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.courses.create({
    data: {
      name: "Learn GraphQL 2",
      duration: 300,
      description: "Learn GraphQL 2",
      teacher: {
        connectOrCreate: {
          where: {
            name: "John Doe",
          },
          create: {
            name: "John Doe",
          },
        },
      },
    },
  });
}

main();
