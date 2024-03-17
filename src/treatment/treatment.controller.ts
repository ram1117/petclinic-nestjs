import { Controller, Get } from '@nestjs/common';
import { TreatmentService } from './treatment.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('treatments')
export class TreatmentController {
  constructor(private service: TreatmentService) {}

  @ApiOperation({
    description: 'Endpoint to get list of all treatments offered by vet clinic',
  })
  @Get()
  getTreatments() {
    return this.service.getTreatments();
  }
}
