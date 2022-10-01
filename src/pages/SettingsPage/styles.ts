import styled from "styled-components";
import { Color, Screen, H2 } from "../../ui";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Setting = styled.div`
  margin-bottom: 40px;
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

export { Form, Setting, Name, Wrapper, Container };
