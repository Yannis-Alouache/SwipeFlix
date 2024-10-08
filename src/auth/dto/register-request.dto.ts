import { IsEmail, Matches } from "class-validator";

export class RegisterRequestDto {
  @IsEmail({}, { message: "E-Mail non valide !" })
  email: string;

  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^<])[A-Za-z\d@.#$!%*?&^<]{8,15}$/,
    { message: "Mot de passe non valide !" },
  )
  password: string;
}
