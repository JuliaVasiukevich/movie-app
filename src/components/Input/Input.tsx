import { SignUpValues } from "components";
import { FormValuesKeys } from "config/authFormValues";
import { ChangeEvent } from "react";
import { UseFormRegister, ValidationRule } from "react-hook-form";
import { InputStyled, Wrapper } from "./styles";

interface IProps {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: FormValuesKeys;
  register?: UseFormRegister<SignUpValues>;
  rules?: IRules;
}

interface IRules {
  required?: boolean;
  maxLength?: ValidationRule<number>;
  minLength?: ValidationRule<number>;
  pattern?: ValidationRule<RegExp>;
}

export const Input = ({
  placeholder,
  type,
  value,
  onChange,
  label,
  register,
  rules,
}: IProps) => {
  return (
    <Wrapper>
      <InputStyled
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        {...(register && label && { ...register(label, { ...rules }) })}
      />
    </Wrapper>
  );
};
