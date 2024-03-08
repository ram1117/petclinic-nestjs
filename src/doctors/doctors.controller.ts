import { Controller, Get, Param } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('doctors')
export class DoctorsController {
  constructor(private service: DoctorsService) {}

  @ApiOperation({
    description: 'Get list of doctors and their details',
  })
  @Get()
  getDoctors() {
    return this.service.getDoctors();
  }

  @ApiOperation({
    description: 'get available appointment slots for selected doctor',
  })
  @Get('slots/:doctorId')
  getSlots(@Param('doctorId') doctorId: string) {
    return this.service.getSlots(doctorId);
  }
}
