import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from 'src/interfaces/user.interface';
import { User } from 'src/schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(email: string, password: string) {
    const salt = 10;

    const hashPass = await bcrypt.hash(password, salt);
    password = hashPass;

    const user: User = {
      email,
      password,
      moviesLiked: [],
    };
    const data = new this.userModel(user);
    const result = await data.save();

    return result;
  }

  async findOne(email: string) {
    return this.userModel.findOne({ email });
  }
}
