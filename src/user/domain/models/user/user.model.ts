import { InvalidEmailFormatError } from "./user.errors";

export type UserData = {
  id: string;
  email: string;
  password: string;
  moviesLiked: string[];
};

export class User {
  private readonly id: string;
  private readonly email: string;
  private readonly password: string;
  private readonly moviesLiked: string[];

  private constructor(
    email: string,
    password: string,
    moviesLiked?: string[],
    id?: string,
  ) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.moviesLiked = moviesLiked;
  }

  static create(
    email: string,
    password: string,
    id: string,
    moviesLiked?: string[],
  ): User {
    this.throwIfEmailNotValid(email);
    return new User(email, password, moviesLiked, id);
  }

  private static throwIfEmailNotValid(email: string): void {
    // eslint-disable-next-line no-useless-escape
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      throw new InvalidEmailFormatError();
    }
  }

  get data(): UserData {
    return {
      id: this.id,
      email: this.email,
      password: this.password,
      moviesLiked: this.moviesLiked,
    };
  }
}
