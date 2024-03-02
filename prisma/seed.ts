import { PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

const petType = [
  { type: 'Dog' },
  { type: 'Cat' },
  { type: 'Reptile' },
  { type: 'Bird' },
  { type: 'Others' },
];

const main = async () => {
  await prisma.petType.createMany({ data: petType });
};

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
