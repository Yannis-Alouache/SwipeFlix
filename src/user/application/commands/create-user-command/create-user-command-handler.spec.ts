import { CreateUserCommandHandler } from "./create-user-command-handler";
import { CreateUserCommand } from "./create-user-command";
import UserRepositoryInMemory from "../../../infrastructure/repository/user-repository-in-memory";
import { InvalidEmailFormatError, InvalidPasswordFormatError, NonUniqueEmailError } from "../../../domain/models/user/user.errors";
import { User } from "../../../domain/models/user/user.model";
import { IdProvider } from "../../../../common/domain/ports/id-provider";
import { IdProviderInMemory } from "../../../../common/infrastructure/id-provider-in-memory";

describe("CreateUserCommandHandler", () => {
  let userRepository: UserRepositoryInMemory;
  let createUserCommandHandler: CreateUserCommandHandler;
  let idProvider: IdProvider; 

  beforeEach(() => {
    userRepository = new UserRepositoryInMemory();
    idProvider = new IdProviderInMemory("test-id");
    createUserCommandHandler = new CreateUserCommandHandler(userRepository, idProvider);
  });

  it("should create a user and save it to the repository", async () => {
    const command = new CreateUserCommand("test@exemple.com", "password123");
    await createUserCommandHandler.execute(command);

    const user = await userRepository.getUserByEmail("test@exemple.com");

    expect(user).toBeDefined();
    expect(user.data.id).toBeDefined();
    expect(user.data.email).toBe("test@exemple.com");
  });

  it("should throw on invalid email", async () => {
    const command = new CreateUserCommand("invalid-email", "password123");

    expect(async () => {
      await createUserCommandHandler.execute(command)
    }).rejects.toThrow(new InvalidEmailFormatError())

  });

  it("should throw on invalid password", async () => {
    const command = new CreateUserCommand("test@exemple.com", "invalid-password");

    expect(async () => {
      await createUserCommandHandler.execute(command)
    }).rejects.toThrow(new InvalidPasswordFormatError())
  });

  it("should throw on non unique email", async () => {
    const exempleUser = User.create("test@exemple.com", "password123", "test-id");
    await userRepository.save(exempleUser);
    const command = new CreateUserCommand("test@exemple.com", "password123");

    expect(async () => {
      await createUserCommandHandler.execute(command)
    }).rejects.toThrow(new NonUniqueEmailError())
  });

});
