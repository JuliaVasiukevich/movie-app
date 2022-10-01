import styled from "styled-components";
import { Color, Screen, H2 } from "../../ui";


const Form = styled.form`
  display: flex;
  flex-grow: 1;

  ${Screen.S} {
  flex-direction:column;
}
`;

const Setting = styled.div`
  margin-bottom: 40px;
`;

const Button = styled.button`
  width: 100%;
  padding: 16px;
  margin-top: 20px;
  background-color: ${Color.Primary};
  color: ${Color.White};
  border: none;
  border-radius: 10px;
`;

const Name = styled(H2)``;

const Wrapper = styled.div`
  width: 100%;
  background-color: ${Color.Graphite};
  border-radius: 10px;
  padding: 24px 40px;
`;

const Container = styled.div`
width: 100%;
padding-right: 40px;
padding-bottom: 40px;

${Screen.MD} {
  padding: 0 30px;
  };
`;

const Column = styled.div`
flex-grow: 1;
margin: 5px;
`;

const LabelText = styled.div`
margin-block: 10px;
`;

export { Form, Setting, Name, Wrapper, Container, Column, Button, LabelText };
