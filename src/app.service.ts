import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(user: any) {
    return { message: user.email };
  }
}
