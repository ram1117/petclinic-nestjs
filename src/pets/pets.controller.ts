import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dtos/createPet.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../users/decorators/current-user.decorator';
import { ApiOperation } from '@nestjs/swagger';

@UseGuards(JwtAuthGuard)
@Controller('pets')
export class PetsController {
  constructor(private petsService: PetsService) {}

  @ApiOperation({ description: 'Endpoint to get all pets added by user' })
  @Get()
  getAllPets(@CurrentUser() user: any) {
    return this.petsService.getPets(user.id);
  }

  @ApiOperation({ description: 'Endpoint to add a new pet by user' })
  @Post()
  createPet(@CurrentUser() user: any, @Body() data: CreatePetDto) {
    return this.petsService.createPet(user.id, data);
  }

  @ApiOperation({
    description: 'Endpoint to get all types of pets the vetclinic treats',
  })
  @Get('pettypes')
  getPetTypes() {
    return this.petsService.getPetTypes();
  }
}
