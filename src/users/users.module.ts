import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { PetsModule } from 'src/pets/pets.module';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [PetsModule, TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [],
})
export class UsersModule {}
