import { ChangeEvent } from "react";
import { InputStyled, Wrapper } from "./styles";

interface IProps {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ placeholder, type, value, onChange }: IProps) => {
  return (
    <Wrapper>
      <InputStyled
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      />
    </Wrapper>
  );
};
