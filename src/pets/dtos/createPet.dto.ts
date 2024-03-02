import { IsString, MinLength } from 'class-validator';

export class CreatePetDto {
  @IsString()
  @MinLength(4)
  name: string;

  @IsString()
  ownerId: string;

  @IsString()
  petTypeId: string;
}
