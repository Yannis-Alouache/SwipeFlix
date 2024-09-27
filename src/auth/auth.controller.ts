import {
  Body,
  Controller,
  Get,
  Post,
  Redirect,
  Render,
  Session,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { NoFilesInterceptor } from '@nestjs/platform-express';
import { RegisterRequestDto } from './dto/register-request.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @Redirect('/auth/login')
  @UseInterceptors(NoFilesInterceptor())
  async registerPost(@Body() body: RegisterRequestDto) {
    console.log(body);
    this.authService.createUser(
      body.email,
      body.password,
    );
  }

  @Get('register')
  @Render('register')
  async registerGet(@Body() req) {}

  @Get('login')
  @Render('login')
  async loginGet(@Body() req) {}

  @Redirect('/')
  @Post('login')
  async loginPost(@Body() body, @Session() session) {
    return this.authService.login(body.email, body.password, session);
  }

  @Redirect('/')
  @Get('logout')
  async PostLogout(@Session() session) {
    this.authService.logout(session);
  }
}
