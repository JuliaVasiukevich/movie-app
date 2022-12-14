import styled from "styled-components";
import { Color, Screen } from "ui";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 574px;
  background: ${Color.Background_primary};
  border-radius: 10px;
  margin-top: 20px;

  ${Screen.MD}{
     width: 80vw;
  };
`;

const LabelText = styled.div`
margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100%;
  padding: 16px;
  margin-bottom: 32px;
  background-color: ${Color.Primary};
  color: ${Color.White};
  border: none;
  border-radius: 10px;
  cursor: pointer;

  :hover{
    filter: grayscale(0.75);
  }
`;

const SignUp = styled.div`
  text-align: center;
`;
const Label = styled.label`
position: relative;
  margin-bottom: 40px;
`;

const Error = styled.p`
position: absolute;
top: 85px;
  color: ${Color.Error};
`;

export { Form, Button, Label, SignUp, Error, LabelText };
