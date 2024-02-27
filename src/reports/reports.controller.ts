import { Controller, Get, Post, Patch, Param } from '@nestjs/common';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Get(':appoinmentId')
  getReport(@Param('appoinmentId') appoinmentId: string) {
    return this.reportsService.findReport(appoinmentId);
  }

  @Post()
  createReport() {
    return 'report created';
  }

  @Patch(':id')
  updateReport(@Param('id') id: string) {
    return `updated report with id ${id}`;
  }
}
