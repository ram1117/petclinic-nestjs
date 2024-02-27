import { Injectable } from '@nestjs/common';

@Injectable()
export class ReportsService {
  findReport(apptId: string) {
    return { id: 1, date: '22/02/2024', appointmentId: apptId };
  }
}
