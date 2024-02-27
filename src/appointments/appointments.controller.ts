import { Controller, Get, Patch, Post, Delete, Param } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';

@Controller('appointments')
export class AppointmentsController {
  constructor(private appointmentService: AppointmentsService) {}

  @Get(':userId')
  getAppointments(@Param('userId') userId: string) {
    return `all appointments for user id ${userId}`;
  }

  @Get(':userId/appointment/:id')
  getAppointment(@Param('userId') userId: string, @Param('id') id: string) {
    return `user ${userId} appointment ${id}`;
  }

  @Post()
  createAppoinment() {
    return 'appointment created';
  }

  @Patch(':id')
  updateAppoinment(@Param('id') id: string) {
    return `updated appointment ${id}`;
  }

  @Delete(':id')
  cancelAppoinment(@Param('id') id: string) {
    return `appointment ${id} cancelled`;
  }
}
