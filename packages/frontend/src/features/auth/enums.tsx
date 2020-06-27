export enum Fields {
  EMAIL = "Email",
  PASSWORD = "Password",
  PASSWORD_CONFIRMATION = "PasswordConfirmation",
}
export enum FieldsPlaceholders {
  EMAIL = "Email",
  PASSWORD = "Hasło",
  REPEAT_PASSWORD = "Powtórz hasło",
}

export enum ErrorMessages {
  WRONG_EMAIL = "Podaj poprawny email",
  REQUIRED_EMAIL = "Podaj email",
  REQUIRED_PASSWORD = "Żeby się zalogować musisz podać hasło",
  MIN_LENGHT_PASSWORD = "Hasło musi mieć minimum 8 znaków",
  MAX_LENGHT_PASSWORD = "Hasło powinno mieć maksymalnie 20 znaków",
  SAME_PASSWORD = "Hasła muszą być takie same",
}
