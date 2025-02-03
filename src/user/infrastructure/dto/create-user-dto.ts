import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDTO {
  @IsEmail({}, { message: "L'adresse email n'est pas valide." })
  email: string;

  @IsString({ message: "Le mot de passe doit être une chaîne." })
  @MinLength(6, {
    message: "Le mot de passe doit avoir au moins 6 caractères.",
  })
  password: string;
}
