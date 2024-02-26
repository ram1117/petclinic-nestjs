import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [UsersModule, PetsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
