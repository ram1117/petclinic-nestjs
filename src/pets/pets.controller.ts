import { Controller, Get, Post, Patch, Param } from '@nestjs/common';

@Controller('pets')
export class PetsController {
  @Get(':userId')
  getAllPets(@Param('userId') userId: string) {
    return `all pets for ${userId}`;
  }
  @Post()
  createPet() {
    return 'new pet created';
  }
  @Patch(':id')
  updatePet(@Param('id') id: string) {
    return `${id} pet updated`;
  }
}
