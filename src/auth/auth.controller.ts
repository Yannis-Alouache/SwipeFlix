import {
  Body,
  Controller,
  Get,
  Post,
  Redirect,
  Render,
  Session,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterRequestDto } from "./dto/register-request.dto";
import { LoginRequestDto } from "./dto/login-request.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  @Redirect("/auth/login")
  async registerPost(@Body() body: RegisterRequestDto) {
    console.log(body);
    this.authService.createUser(body.email, body.password);
  }

  @Get("register")
  @Render("register")
  async registerGet() {}

  @Get("login")
  @Render("login")
  async loginGet() {}

  @Redirect("/")
  @Post("login")
  async loginPost(@Body() body: LoginRequestDto, @Session() session) {
    console.log(body);
    return this.authService.login(body.email, body.password, session);
  }

  @Redirect("/")
  @Get("logout")
  async PostLogout(@Session() session) {
    this.authService.logout(session);
  }
}
