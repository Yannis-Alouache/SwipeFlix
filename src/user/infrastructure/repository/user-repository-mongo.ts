import { MongoClient, Db, Collection } from "mongodb";
import { User } from "src/user/domain/models/user/user.model";
import { UserRepository } from "src/user/domain/ports/user.repository";

export class UserRepositoryMongo implements UserRepository {
  getUserByEmail(email: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  save(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  getUserById(userId: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  updateUser(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  deleteUser(userId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
