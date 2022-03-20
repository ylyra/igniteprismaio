import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.courses.update({
    where: {
      name: "Learn GraphQL",
    },
    data: {
      duration: 300,
    },
  });
}

main();
