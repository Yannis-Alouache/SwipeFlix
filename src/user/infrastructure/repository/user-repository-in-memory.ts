import { User } from "src/user/domain/models/user/user.model";
import { UserRepository } from "src/user/domain/ports/user.repository";

class UserRepositoryInMemory implements UserRepository {
  private users: User[] = [];

  async save(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async getUserById(userId: string): Promise<User> {
    return this.users.find((user) => user.data.id === userId);
  }

  async getUserByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.data.email == email);
  }

  async getUsers(): Promise<User[]> {
    return this.users;
  }

  async updateUser(user: User): Promise<User> {
    const index = this.users.findIndex((u) => u.data.id === user.data.id);
    if (index !== -1) {
      this.users[index] = user;
      return user;
    }
    throw new Error("User not found");
  }

  async deleteUser(userId: string): Promise<void> {
    this.users = this.users.filter((user) => user.data.id !== userId);
  }
}

export default UserRepositoryInMemory;
