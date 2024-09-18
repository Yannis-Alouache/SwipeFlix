import {
  Body,
  Injectable,
  Req,
  Session,
  UnauthorizedException,
} from '@nestjs/common';
import { IUser } from 'src/interfaces/user.interface';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(user: IUser) {
    this.userService.create(user);
  }

  async login(email: string, password: string, session: any) {
    const user = await this.userService.findOne(email);
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException();
    }

    const payload = { id: user.id, email: user.email };
    const accessToken = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET,
    });

    console.log(accessToken);

    session.accessToken = accessToken;

    console.log(session);
  }

  async logout(session: any) {
    session.accessToken = null;
  }
}
