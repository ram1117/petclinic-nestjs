import { Module } from '@nestjs/common';
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';

@Module({
  controllers: [PetsController],
  providers: [PetsService],
  imports: [],
})
export class PetsModule {}
