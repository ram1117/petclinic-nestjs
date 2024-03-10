import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DoctorsService {
  constructor(private db: PrismaService) {}

  async getDoctors() {
    const docData = await this.db.doctor.findMany({
      include: {
        treatments: { include: { treatment: true } },
        workDays: true,
      },
    });

    const result = docData.map((doc) => ({
      ...doc,
      treatments: doc.treatments.map((treatment) => treatment.treatment.title),
      workDays: doc.workDays.map((day) => day.day),
    }));
    return result;
  }

  async getSlots(id: string) {
    return await this.db.slot.findMany({ where: { doctorId: id } });
  }
}
