import { Transform } from 'class-transformer';
import { IsString, IsDate } from 'class-validator';

export class CreateAppointMentDto {
  @IsString()
  userId: string;
  @IsString()
  doctorId: string;
  @IsString()
  treatmentId: string;
  @IsString()
  petId: string;
  @Transform(({ value }) => new Date(value))
  @IsDate()
  date: Date;
}
