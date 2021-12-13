import { Control, FieldValues, UseFormRegister } from "react-hook-form";

type PropsBase = {
  control: Control<FieldValues, object>;
  register: UseFormRegister<FieldValues>;
};
export interface InputProps extends PropsBase {
  type?: "NAME" | "CPF" | "CNPJ" | "RG" | "BIRTHDATE" | "EMAIL";
  name?: string;
  label?: string;
  error?: string;
}

export interface PasswordProps extends PropsBase {
  error?: string;
}
