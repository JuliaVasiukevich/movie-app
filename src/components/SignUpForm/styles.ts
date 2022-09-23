import styled from "styled-components";
import { Color } from "../../ui/colors";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 574px;
  background: ${Color.Background_primary};
  border-radius: 10px;
`;

const Button = styled.button`
  width: 100%;
  padding: 16px;
  margin-bottom: 32px;
  background-color: ${Color.Primary};
  color: ${Color.White};
  border: none;
  border-radius: 10px;
`;

const SignIn = styled.div`
  text-align: center;
`;
const Label = styled.label`
  margin-bottom: 20px;
`;

const Error = styled.p`
  color: ${Color.Error};
`;

export { Form, Button, Label, SignIn, Error };
