import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { PetsModule } from 'src/pets/pets.module';

@Module({
  imports: [PetsModule],
  controllers: [UsersController],
})
export class UsersModule {}
