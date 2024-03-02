import { Pet } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class PetEntity implements Pet {
  constructor(partial: Partial<PetEntity>) {
    Object.assign(this, partial);
  }

  id: string;
  name: string;
  ownerId: string;

  @Exclude()
  petTypeId: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;
}
