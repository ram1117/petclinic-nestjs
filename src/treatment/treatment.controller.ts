import { Controller, Get } from '@nestjs/common';
import { TreatmentService } from './treatment.service';

@Controller('treatment')
export class TreatmentController {
  constructor(private service: TreatmentService) {}

  @Get()
  getTreatments() {
    return this.service.getTreatments();
  }
}
