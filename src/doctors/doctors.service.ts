import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DoctorsService {
  constructor(private db: PrismaService) {}

  async getDoctors() {
    const docData = await this.db.doctor.findMany({
      include: {
        treatments: { include: { treatment: true } },
      },
    });

    const result = docData.map((doc) => ({
      ...doc,
      treatments: doc.treatments.map((treatment) => treatment.treatment.title),
    }));
    return result;
  }
}
