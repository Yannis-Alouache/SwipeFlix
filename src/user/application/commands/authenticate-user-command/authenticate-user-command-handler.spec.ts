import { CreateUserCommandHandler } from "../create-user-command/create-user-command-handler";
import { CreateUserCommand } from "../create-user-command/create-user-command";
import UserRepositoryInMemory from "../../../infrastructure/repository/user-repository-in-memory";
import { InvalidEmailFormatError, InvalidPasswordFormatError, NonUniqueEmailError } from "../../../domain/models/user/user.errors";
import { User } from "../../../domain/models/user/user.model";

describe("AuthenticateUserCommandHandler", () => {
  let userRepository: UserRepositoryInMemory;
  let createUserCommandHandler: CreateUserCommandHandler;

  beforeEach(async () => {
    userRepository = new UserRepositoryInMemory();
    createUserCommandHandler = new CreateUserCommandHandler(userRepository);

    const createUserCommand = new CreateUserCommand("test@exemple.com", "password123");
    await createUserCommandHandler.execute(createUserCommand);
  });

  it("should authenticate a user and return a valid jwt token", async () => {

    const authenticateUserCommand = new AuthenticateUserCommand("test@exemple.com", "password123");

    const result = await authenticateUserCommandHandler.execute(authenticateUserCommand);

    expect(result).toBeDefined();
    expect(result.token).toBeDefined();
  });
});
