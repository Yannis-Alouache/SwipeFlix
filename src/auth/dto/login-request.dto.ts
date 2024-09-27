import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginRequestDto {
    @IsEmail({}, { message: 'E-Mail non valide !' })
    email: string;

    @IsString()
    @IsNotEmpty({ message: 'Mot de passe obligatoire !' })
    password: string;
}