import { IsEmail, IsNotEmpty } from "class-validator";

export class LoginRequestDto {
  @IsEmail({}, { message: "E-Mail non valide !" })
  email: string;

  @IsNotEmpty({ message: "Mot de passe obligatoire !" })
  password: string;
}
