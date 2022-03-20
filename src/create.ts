import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Learn GraphQL",
      description: "Learn GraphQL",
      duration: 100,
    },
  });

  console.log(result);
}

main();
