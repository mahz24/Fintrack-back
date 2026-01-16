import app from "./app.js";
import { env } from "./config/env.js";
import prisma from "./lib/prisma.js";

async function main() {
  await prisma.$connect();
  app.listen(env.PORT, () => {
    console.log(`Server is running on port ${env.PORT}`);
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
