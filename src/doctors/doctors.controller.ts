import { Controller, Get, Param } from '@nestjs/common';
import { DoctorsService } from './doctors.service';

@Controller('doctors')
export class DoctorsController {
  constructor(private service: DoctorsService) {}

  @Get()
  getDoctors() {
    return this.service.getDoctors();
  }

  @Get('slots/:id')
  getSlots(@Param('id') id: string) {
    return this.service.getSlots(id);
  }
}
