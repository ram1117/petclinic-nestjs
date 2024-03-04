import { Appointment } from '@prisma/client';
import { Expose, Type, Exclude } from 'class-transformer';
import { DoctorEntity } from 'src/doctors/entity/doctor.entity';
import { PetEntity } from 'src/pets/entities/pet.entity';
import { TreatmentEntity } from 'src/treatment/entity/treatment.entity';
import { UserEntity } from 'src/users/entities/user.entitiy';

export class AppointmentEntity implements Appointment {
  constructor(partial: Partial<AppointmentEntity>) {
    Object.assign(this, partial);
  }

  id: string;
  slotId: string;
  @Exclude()
  userId: string;
  @Exclude()
  petId: string;
  @Exclude()
  doctorId: string;
  @Exclude()
  treatmentId: string;

  @Expose()
  @Type(() => UserEntity)
  user: UserEntity;

  @Expose()
  @Type(() => PetEntity)
  pet: PetEntity;

  @Expose()
  @Type(() => DoctorEntity)
  doctor: DoctorEntity;

  @Expose()
  @Type(() => TreatmentEntity)
  treatment: TreatmentEntity;
}
