import { PrismaClient } from '.prisma/client';
import { petType, treatmentData, workDays, slotsData } from './seedData';
interface treatmentDataType {
  title: string;
  description: string;
  price: number;
  doctors: {
    id: string;
    name: string;
    degree: string;
    experience: number;
    about: string;
  }[];
}

const prisma = new PrismaClient();

const generateTreatmentData = (data: treatmentDataType) => {
  return prisma.treatment.create({
    data: {
      title: data.title,
      description: data.description,
      price: data.price,
      doctors: {
        create: data.doctors.map((doc) => {
          return {
            doctor: {
              connectOrCreate: {
                where: { name: doc.name },
                create: {
                  ...doc,
                },
              },
            },
          };
        }),
      },
    },
  });
};

const main = async () => {
  await prisma.petType.deleteMany();
  await prisma.treatmentsOnDoctors.deleteMany();
  await prisma.treatment.deleteMany();
  await prisma.doctor.deleteMany();

  await prisma.petType.createMany({ data: petType });

  await prisma.$transaction(
    treatmentData.map((data) => generateTreatmentData(data)),
  );

  await prisma.$transaction(
    workDays.map((item) => {
      return prisma.workDay.createMany({
        data: item.days.map((day) => ({ doctorId: item.doctorId, day })),
      });
    }),
  );

  await prisma.slot.createMany({ data: slotsData });
};

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
