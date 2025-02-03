import { User } from "../models/user/user.model";

export interface UserRepository {
  save(user: User): Promise<User>;
  getUserById(userId: string): Promise<User | null>;
  getUserByEmail(email: string): Promise<User | null>;
  updateUser(user: User): Promise<User>;
  deleteUser(userId: string): Promise<void>;
}
