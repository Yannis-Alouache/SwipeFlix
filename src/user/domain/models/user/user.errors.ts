export class InvalidEmailFormatError extends Error {
  constructor() {
    super("Format de l'email invalide");
  }
}

export class InvalidPasswordFormatError extends Error {
  constructor() {
    super("Format du mot de passe invalide");
  }
}

export class NonUniqueEmailError extends Error {
  constructor() {
    super("Email déjà utilisé");
  }
}
