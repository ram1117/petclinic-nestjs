import {
  Controller,
  Get,
  Patch,
  Post,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { CreateAppointMentDto } from './dtos/createAppointment.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@Controller('appointment')
export class AppointmentsController {
  constructor(private appointmentService: AppointmentsService) {}

  @UseGuards(JwtAuthGuard)
  @Get('user/:userId')
  getAppointments(@Param('userId') userId: string) {
    return this.appointmentService.getAppointments(userId);
  }

  @Get(':id')
  getAppointment(@Param('id') id: string) {
    return this.appointmentService.getAppointmentDetail(id);
  }

  @Post()
  createAppoinment(@Body() body: CreateAppointMentDto) {
    return this.appointmentService.createAppointment(body);
  }

  @Patch(':id')
  updateAppoinment(
    @Param('id') id: string,
    @Body() body: Partial<CreateAppointMentDto>,
  ) {
    return this.appointmentService.updateAppoinmentDetail(id, body);
  }

  @Delete(':id')
  cancelAppoinment(@Param('id') id: string) {
    return this.appointmentService.deleteAppointment(id);
  }
}
