import styled from "styled-components";
import { Color, Screen } from "ui";


const Form = styled.form`
  display: flex;
  flex-grow: 1;

  ${Screen.S} {
  flex-direction:column;
}
`;

const Button = styled.button`
  width: 100%;
  padding: 16px;
  margin-top: 20px;
  background-color: ${Color.Primary};
  color: ${Color.White};
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const Column = styled.div`
flex-grow: 1;
margin: 5px;
`;

const LabelText = styled.div`
margin-block: 10px;
`;

export { Form, Column, Button, LabelText };