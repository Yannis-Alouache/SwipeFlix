import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/user/user.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(email: string, password: string) {
    this.userService.create(email, password);
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
