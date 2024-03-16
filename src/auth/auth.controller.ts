import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from '../users/dtos/createUser.dto';
import { AuthService } from './auth.service';
import { SignInDto } from './dtos/signin.dto';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiBody({
    description: 'Sample request body to sign in the user',
    type: SignInDto,
  })
  @Post('signin')
  async signin(@Body() data: SignInDto, @Res({ passthrough: true }) res: any) {
    const { user, token } = await this.authService.signinUser(
      data.username,
      data.password,
    );
    res.cookie('access_token', token, { httpOnly: true });
    return user;
  }

  @ApiBody({
    description: 'Sample request body to sign up new user',
    type: CreateUserDto,
  })
  @Post('signup')
  async signup(@Body() data: CreateUserDto) {
    return this.authService.signupUser(data);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ description: 'endpoint to signout the user' })
  @Post('signout')
  async signout(@Res({ passthrough: true }) res: any) {
    res.clearCookie('access_token');
    return { message: 'signed out successfully' };
  }
}
