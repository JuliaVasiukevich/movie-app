export enum FormValuesKeys {
  EMAIL = "email",
  PASSWORD = "password",
}

export type IFormValues = {
  [FormValuesKeys.EMAIL]: string;
  [FormValuesKeys.PASSWORD]: string;
};
