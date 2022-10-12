import styled from "styled-components";
import { Color } from "ui";

const InputStyled = styled.input`
  width: 100%;
  padding: 16px 20px;
  background: ${Color.Background_primary_dark};
  border-radius: 10px;
  border: none;
  color: ${Color.White};

`;

const Wrapper = styled.div``;

export { InputStyled, Wrapper };
