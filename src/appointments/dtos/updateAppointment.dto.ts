import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAppointmentDto {
  @ApiProperty()
  @IsString()
  doctorId: string;

  @ApiProperty()
  @IsString()
  treatmentId: string;

  @ApiProperty()
  @IsString()
  petId: string;

  @ApiProperty()
  @IsString()
  slotId: string;
}
