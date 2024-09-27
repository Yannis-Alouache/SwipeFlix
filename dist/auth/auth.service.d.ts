import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    createUser(email: string, password: string): Promise<void>;
    login(email: string, password: string, session: any): Promise<void>;
    logout(session: any): Promise<void>;
}
