import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PetEntity } from './entities/pet.entity';

@Injectable()
export class PetsService {
  constructor(private db: PrismaService) {}

  async getPets(userId: string) {
    const pets = await this.db.pet.findMany({
      where: { ownerId: userId },
      include: { petType: true },
    });

    return pets.map((pet) => new PetEntity(pet));
  }
  async createPet(data: any) {
    const pet = await this.db.pet.create({ data: data });
    return new PetEntity(pet);
  }
}
