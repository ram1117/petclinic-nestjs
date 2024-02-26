import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PetsModule } from './pets/pets.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { ReportsModule } from './reports/reports.module';
import { InvoicesModule } from './invoices/invoices.module';

@Module({
  imports: [
    UsersModule,
    PetsModule,
    AppointmentsModule,
    ReportsModule,
    InvoicesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
