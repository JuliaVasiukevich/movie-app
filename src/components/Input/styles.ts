import styled from "styled-components";
import { Color } from "ui";

const InputStyled = styled.input`
  width: 100%;
  padding: 16px 20px;
  background: ${Color.Background_primary_dark};
  border-radius: 10px;
  border: none;
  color: ${Color.White};

//TODO раскомментить, сделать что-то
  /* :active,
  :hover,
  :focus {
    outline: 0;
    outline-offset: 0;
  } */
`;

const Wrapper = styled.div``;

export { InputStyled, Wrapper };
