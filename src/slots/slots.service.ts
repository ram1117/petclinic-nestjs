import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class SlotsService {
  constructor(private repo: PrismaService) {}

  // Run slot creation every sunday at 6.00 AM

  @Cron('0 6 * * SUN')
  async createSlots() {
    // Slot timings for each day
    const time = [8, 10, 14];

    const date = new Date();
    if (date.getDay() === 0) {
      const doctors = await this.repo.doctor.findMany({
        include: { workDays: true },
      });

      // Get doctor and their working days in a week

      const filteredData = doctors.map((doc) => {
        return {
          id: doc.id,
          days: doc.workDays.map((day) => day.day),
        };
      });

      const slots = [];
      filteredData.forEach((doctor) => {
        doctor.days.forEach((day) => {
          const today = new Date();
          today.setDate(date.getDay() + day);
          time.forEach((time) => {
            const timeslot = new Date();
            timeslot.setHours(time, 0, 0, 0);
            slots.push({ doctorId: doctor.id, slot: timeslot });
          });
        });
      });

      // Deleting slots from last week
      await this.repo.slot.deleteMany({ where: { slot: { lte: new Date() } } });

      // Create new slots for the upcoming week
      await this.repo.slot.createMany({ data: slots });
    }
  }
}
