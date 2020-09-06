export enum Fields {
  EMAIL = "email",
  PASSWORD = "password",
  PASSWORD_CONFIRMATION = "passwordConfirmation",
}
export enum FieldsPlaceholders {
  EMAIL = "Email",
  PASSWORD = "Hasło",
  REPEAT_PASSWORD = "Powtórz hasło",
}

export enum ErrorMessages {
  WRONG_EMAIL = "Podaj poprawny email",
  REQUIRED_EMAIL = "Podaj email",
  REQUIRED_PASSWORD = "Podaj hasło",
  MIN_LENGHT_PASSWORD = "Hasło musi mieć minimum 8 znaków",
  MAX_LENGHT_PASSWORD = "Hasło powinno mieć maksymalnie 20 znaków",
  SAME_PASSWORD = "Hasła muszą być takie same",
  DUPLICATE_EMAIL = "Email jest już w użytku",
  SERVER_CRUSHED = "Problem z serwerem",
  ACCOUNT_NOT_FOUND = "Nieprawidłowe dane logowania",
}
