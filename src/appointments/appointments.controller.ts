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
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from '../users/decorators/current-user.decorator';
import { ApiBody, ApiCookieAuth, ApiOperation } from '@nestjs/swagger';
import { UpdateAppointmentDto } from './dtos/updateAppointment.dto';

@ApiCookieAuth()
@UseGuards(JwtAuthGuard)
@Controller('appointment')
export class AppointmentsController {
  constructor(private appointmentService: AppointmentsService) {}

  @ApiOperation({ description: 'get appointments for logged in user' })
  @Get()
  getAppointments(@CurrentUser() user: any) {
    return this.appointmentService.getAppointments(user.id);
  }

  @ApiOperation({
    description: 'get details of a particular appointment by id',
  })
  @Get(':id')
  getAppointment(@Param('id') id: string) {
    return this.appointmentService.getAppointmentDetail(id);
  }

  @ApiBody({
    type: CreateAppointMentDto,
    description:
      'following fields on request body needed to create appointment',
  })
  @Post()
  createAppoinment(
    @Body() body: CreateAppointMentDto,
    @CurrentUser() user: any,
  ) {
    return this.appointmentService.createAppointment(user.id, body);
  }

  @ApiBody({
    type: UpdateAppointmentDto,
    description:
      'add fields to be updated to request body needed to create appointment',
  })
  @Patch(':id')
  updateAppoinment(
    @Param('id') id: string,
    @Body() body: UpdateAppointmentDto,
  ) {
    return this.appointmentService.updateAppoinmentDetail(id, body);
  }

  @ApiOperation({
    description: 'delete an appointment by id',
  })
  @Delete(':id')
  cancelAppoinment(@Param('id') id: string) {
    return this.appointmentService.deleteAppointment(id);
  }
}
