import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dtos/createPet.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';

@UseGuards(JwtAuthGuard)
@Controller('pets')
export class PetsController {
  constructor(private petsService: PetsService) {}

  @Get()
  getAllPets(@CurrentUser() user: any) {
    return this.petsService.getPets(user.id);
  }
  @Post()
  createPet(@CurrentUser() user: any, @Body() data: CreatePetDto) {
    return this.petsService.createPet(user.id, data);
  }
}
