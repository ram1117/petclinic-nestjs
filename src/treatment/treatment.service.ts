import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TreatmentService {
  constructor(private repo: PrismaService) {}

  async getTreatments() {
    const treatments = await this.repo.treatment.findMany({
      include: {
        doctors: {
          include: {
            doctor: {
              include: {
                slots: {
                  where: { available: true },
                  orderBy: { slot: 'asc' },
                },
              },
            },
          },
        },
      },
    });
    return treatments;
  }
}
