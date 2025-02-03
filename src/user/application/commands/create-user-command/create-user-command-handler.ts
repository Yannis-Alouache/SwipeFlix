import { User } from "../../../domain/models/user/user.model";
import { CreateUserCommand } from "./create-user-command";
import { UserRepository } from "src/user/domain/ports/user.repository";
import { Inject } from "@nestjs/common";
import { NonUniqueEmailError, InvalidPasswordFormatError } from "../../../domain/models/user/user.errors";
import * as bcrypt from 'bcrypt';
import { IdProvider } from "../../../../common/domain/ports/id-provider";

export class CreateUserCommandHandler {
  constructor(
    @Inject("UserRepository") private readonly userRepository: UserRepository,
    @Inject("IdProvider") private readonly idProvider: IdProvider,
  ) {}
  async execute(command: CreateUserCommand): Promise<void> {
    await this.throwIfEmailAlreadyExists(command.email);
    await this.throwIfPasswordNotValid(command.password);

    const id = this.idProvider.generate();

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(command.password, salt);
    
    const user: User = User.create(command.email, hashedPassword, id);
    this.userRepository.save(user);
  }

  async throwIfPasswordNotValid(password: string) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      console.log("Invalid password format");
      throw new InvalidPasswordFormatError();
    }
  }

  async throwIfEmailAlreadyExists(email: string) {
    const user = await this.userRepository.getUserByEmail(email);
    if (user) {
      throw new NonUniqueEmailError();
    }
  }
}
