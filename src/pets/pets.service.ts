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
  async createPet(id: string, data: any) {
    const pet = await this.db.pet.create({ data: { ...data, ownerId: id } });
    return new PetEntity(pet);
  }

  async getPetTypes() {
    return await this.db.petType.findMany();
  }
}
