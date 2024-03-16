import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TreatmentService {
  constructor(private repo: PrismaService) {}

  async getTreatments() {
    const treatments = await this.repo.treatment.findMany({
      include: {
        doctors: { include: { doctor: { include: { slots: true } } } },
      },
    });

    const filteredData = treatments.map((treatment) => ({
      ...treatment,
      doctors: treatment.doctors.map((doctor) => ({
        id: doctor.doctor.id,
        name: doctor.doctor.name,
      })),
    }));

    return filteredData;
  }
}
