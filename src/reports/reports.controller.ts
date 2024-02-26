import { Controller, Get, Post, Patch, Param } from '@nestjs/common';

@Controller('reports')
export class ReportsController {
  @Get(':appoinmentId')
  getReport(@Param('appoinmentId') appoinmentId: string) {
    return `report for appoinment ${appoinmentId}`;
  }

  @Get('pet/:petId')
  getReportsForPet(@Param('petId') petId: string) {
    return `reports for pet with id ${petId}`;
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
