import { Doctor } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class DoctorEntity implements Doctor {
  constructor(partial: Partial<DoctorEntity>) {
    Object.assign(this, partial);
  }

  id: string;
  name: string;
  @Exclude()
  degree: string;
  @Exclude()
  experience: number;
  @Exclude()
  about: string;
}
