import styled from "styled-components";
import { H2 } from "ui/typography";
import { Color } from "../../ui/colors";

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
  background-color: ${Color.Background_primary_dark};
  border-radius: 10px;
  padding: 24px 40px;
`;

export { Form, Setting, Name, Wrapper };
