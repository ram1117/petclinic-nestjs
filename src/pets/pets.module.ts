import { Module } from '@nestjs/common';
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './entities/pets.entity';
import { PetType } from './entities/petType.entity';

@Module({
  controllers: [PetsController],
  providers: [PetsService],
  imports: [TypeOrmModule.forFeature([Pet, PetType])],
})
export class PetsModule {}
