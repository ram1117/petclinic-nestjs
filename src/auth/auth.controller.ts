import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signin(@Req() req: any, @Res({ passthrough: true }) res: any) {
    const { user, token } = await this.authService.signinUser(req.user);
    res.cookie('access_token', token, { httpOnly: true });
    return user;
  }
  @Post('signup')
  async signup(@Body() data: CreateUserDto) {
    return this.authService.signupUser(data);
  }

  @Get('signout')
  async signout(@Res({ passthrough: true }) res: any) {
    res.clearCookie('access_token');
    return 'signed out successfully';
  }
}
