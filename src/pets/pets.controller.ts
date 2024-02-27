import { Controller, Get, Post, Patch, Param } from '@nestjs/common';
import { PetsService } from './pets.service';

@Controller('pets')
export class PetsController {
  constructor(private petsService: PetsService) {}

  @Get()
  getAllPets() {
    return this.petsService.getPets('1');
  }
  @Post()
  createPet() {
    return this.petsService.createPet();
  }
  @Patch(':id')
  updatePet(@Param('id') id: string) {
    return this.petsService.updatePet(id);
  }
}
