import { Body, Controller, Get, Post, Render } from "@nestjs/common";
import { CreateUserCommand } from "src/user/application/commands/create-user-command/create-user-command";
import { CreateUserDTO } from "../dto/create-user-dto";
import { CreateUserCommandHandler } from "src/user/application/commands/create-user-command/create-user-command-handler";

@Controller()
export class UserController {
  constructor(
    private readonly createUserCommandHandler: CreateUserCommandHandler,
  ) {}

  @Get("register")
  @Render("register")
  async registerGet() {}

  @Get("login")
  @Render("login")
  async loginGet() {}

  @Post("register")
  async registerPost(@Body() body: CreateUserDTO): Promise<void> {
    this.createUserCommandHandler.execute(
      new CreateUserCommand(body.email, body.password),
    );
  }

  @Post("login")
  async loginPost() {
    throw new Error("Not implemented");
  }

  @Get("logout")
  async PostLogout() {
    throw new Error("Not implemented");
  }
}
