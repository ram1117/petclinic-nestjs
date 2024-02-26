import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PetsModule } from './pets/pets.module';
import { AppointmentsModule } from './appointments/appointments.module';

@Module({
  imports: [UsersModule, PetsModule, AppointmentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
