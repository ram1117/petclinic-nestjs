import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dtos/createPet.dto';

@Controller('pets')
export class PetsController {
  constructor(private petsService: PetsService) {}

  @Get(':userId')
  getAllPets(@Param('userId') userId: string) {
    return this.petsService.getPets(userId);
  }
  @Post()
  createPet(@Body() data: CreatePetDto) {
    return this.petsService.createPet(data);
  }
}
