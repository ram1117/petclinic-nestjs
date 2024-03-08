import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dtos/createPet.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('pets')
export class PetsController {
  constructor(private petsService: PetsService) {}

  @Get()
  getAllPets(@Req() req: any) {
    return this.petsService.getPets(req.user.id);
  }
  @Post()
  createPet(@Req() req: any, @Body() data: CreatePetDto) {
    console.log(req.user);
    return this.petsService.createPet(req.user.id, data);
  }
}
