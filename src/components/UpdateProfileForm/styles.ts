import styled from "styled-components";
import { Color, Screen } from "ui";


const Form = styled.form`
  display: flex;
  flex-grow: 1;

  ${Screen.S} {
  flex-direction: column;
}
`;

const Button = styled.button`
  width: 200px;
  padding: 16px;
  margin-inline: 20px;
  background-color: ${Color.Primary};
  color: ${Color.White};
  border: none;
  border-radius: 10px;
  cursor: pointer;

  :hover{
    filter: grayscale(0.75);
  }

  ${Screen.S} {
    width: 100%;
    margin: 10px 0 10px;
}
`;

const LabelText = styled.div`
  padding-block: 16px;
  margin-right: 10px;
`;

const Error = styled.p`
  color: ${Color.Error};
`;

export { Form, Button, LabelText, Error };