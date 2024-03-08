import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PetsModule } from './pets/pets.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { ReportsModule } from './reports/reports.module';
import { InvoicesModule } from './invoices/invoices.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaExceptionFilter } from './prisma-exception-filter/prisma-exception.filter';
import { APP_FILTER } from '@nestjs/core';
import { PrismaModule } from './prisma/prisma.module';
import { DoctorsModule } from './doctors/doctors.module';
import { TreatmentModule } from './treatment/treatment.module';
import { SlotsService } from './slots/slots.service';
import { ScheduleModule } from '@nestjs/schedule';
import { AuthModule } from './auth/auth.module';
import cookieParser from 'cookie-parser';

@Module({
  imports: [
    UsersModule,
    PetsModule,
    AppointmentsModule,
    ReportsModule,
    InvoicesModule,
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
      isGlobal: true,
    }),
    PrismaModule,
    DoctorsModule,
    TreatmentModule,
    ScheduleModule.forRoot(),
    AuthModule,
  ],
  controllers: [],
  providers: [
    { provide: APP_FILTER, useClass: PrismaExceptionFilter },
    SlotsService,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cookieParser()).forRoutes('*');
  }
}
