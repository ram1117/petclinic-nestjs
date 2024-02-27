import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { PetsModule } from 'src/pets/pets.module';
import { UsersService } from './users.service';

@Module({
  imports: [PetsModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
