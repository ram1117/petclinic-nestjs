import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAppointMentDto } from './dtos/createAppointment.dto';
import { AppointmentEntity } from './enitity/appointment.entity';

@Injectable()
export class AppointmentsService {
  constructor(private repo: PrismaService) {}

  async getAppointments(id: string) {
    const apptmnts = await this.repo.appointment.findMany({
      where: { userId: id },
      orderBy: { slot: { slot: 'desc' } },
      include: { doctor: true, pet: true, treatment: true, slot: true },
    });

    return apptmnts.map((appt) => new AppointmentEntity(appt));
  }

  async createAppointment(id: string, data: CreateAppointMentDto) {
    await this.repo.slot.update({
      where: { id: data.slotId },
      data: { available: false },
    });
    return await this.repo.appointment.create({
      data: { ...data, userId: id },
    });
  }

  async getAppointmentDetail(id: string) {
    const appt = await this.repo.appointment.findUnique({
      where: { id },
      include: {
        pet: true,
        user: true,
        doctor: true,
        treatment: true,
        slot: true,
      },
    });
    return new AppointmentEntity(appt);
  }

  async updateAppoinmentDetail(
    id: string,
    data: Partial<CreateAppointMentDto>,
  ) {
    return new AppointmentEntity(
      await this.repo.appointment.update({
        where: { id },
        data: { ...data },
      }),
    );
  }

  async deleteAppointment(id: string) {
    const apptmnt = await this.repo.appointment.findUnique({ where: { id } });

    await this.repo.appointment.delete({ where: { id } });

    return await this.repo.slot.update({
      where: { id: apptmnt.slotId },
      data: { available: true },
    });
  }
}
