import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PetsModule } from './pets/pets.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { ReportsModule } from './reports/reports.module';
import { InvoicesModule } from './invoices/invoices.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from './config/databaseConfig';
import { TypeormConfig } from './config/TypeormConfig.service';

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
      load: [databaseConfig],
    }),
    TypeOrmModule.forRootAsync({ useClass: TypeormConfig }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
