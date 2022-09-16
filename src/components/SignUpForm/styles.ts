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
  background-color: ${Color.Primary};
  color: ${Color.White};
  width: 100%;
  border: none;
  padding: 16px;
  border-radius: 10px;
  margin-bottom: 32px;
`;

const SignIn = styled.div`
  text-align: center;
`;
const Label = styled.label`
  margin-bottom: 40px;
`;

const Error = styled.p`
  position: absolute;
  color: ${Color.Error};
  margin: 10px;
`;
const CommonError = styled(Error)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Form, Button, Label, SignIn, Error, CommonError };
