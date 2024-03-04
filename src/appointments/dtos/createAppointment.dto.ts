import { IsString } from 'class-validator';

export class CreateAppointMentDto {
  @IsString()
  userId: string;
  @IsString()
  doctorId: string;
  @IsString()
  treatmentId: string;
  @IsString()
  petId: string;
  @IsString()
  slotId: string;
}
