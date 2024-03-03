import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAppointMentDto } from './dtos/createAppointment.dto';
import { AppointmentEntity } from './enitity/appointment.entity';

@Injectable()
export class AppointmentsService {
  constructor(private repo: PrismaService) {}

  async getAppointments(id: string) {
    const apptmnts = await this.repo.appointment.findMany({
      where: { userId: id },
      include: { doctor: true, pet: true, treatment: true },
    });

    return apptmnts.map((appt) => new AppointmentEntity(appt));
  }

  async createAppointment(data: CreateAppointMentDto) {
    return await this.repo.appointment.create({ data });
  }

  async getAppointmentDetail(id: string) {
    const appt = await this.repo.appointment.findUnique({
      where: { id },
      include: {
        pet: true,
        user: true,
        doctor: true,
        treatment: true,
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
    return await this.repo.appointment.delete({ where: { id } });
  }
}
