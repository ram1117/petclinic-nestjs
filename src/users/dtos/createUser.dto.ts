import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, MinLength, Matches } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  fullname: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'Password should contain one capital, one special character and one number',
  })
  password: string;
}
