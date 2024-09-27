import { AuthService } from './auth.service';
import { RegisterRequestDto } from './dto/register-request.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registerPost(body: RegisterRequestDto): Promise<void>;
    registerGet(req: any): Promise<void>;
    loginGet(req: any): Promise<void>;
    loginPost(body: any, session: any): Promise<void>;
    PostLogout(session: any): Promise<void>;
}
