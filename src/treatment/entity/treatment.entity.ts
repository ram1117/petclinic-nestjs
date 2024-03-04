import { Treatment } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class TreatmentEntity implements Treatment {
  id: string;
  title: string;
  @Exclude()
  description: string;
  price: number;
}
