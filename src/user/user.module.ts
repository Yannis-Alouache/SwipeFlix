import { Module } from "@nestjs/common";
import { UserController } from "./infrastructure/controllers/user.controller";
import { CreateUserCommandHandler } from "./application/commands/create-user-command/create-user-command-handler";
import UserRepositoryInMemory from "./infrastructure/repository/user-repository-in-memory";

@Module({
  providers: [
    {
      provide: "UserRepository",
      useClass: UserRepositoryInMemory,
    },
    CreateUserCommandHandler,
  ],
  controllers: [UserController],
})
export class UserModule {}
