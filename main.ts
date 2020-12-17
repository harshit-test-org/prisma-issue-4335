import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient();
  try {
    await prisma.$connect();
  } catch (e) {
    console.log("catch was called");
    // terminating the process
    process.exit(1);
  }

  console.log("outside of catch");
  const data = await prisma.user.create({
    data: {
      email: "hp@hey.com",
    },
  });

  console.log(data);

  prisma.$disconnect();
}

main();
