import styled from "styled-components";
import { Color } from "../../ui/colors";

const InputStyled = styled.input`
  padding: 16px 20px;
  background: ${Color.Background_primary_dark};
  border-radius: 10px;
  border: none;
  width: 100%;

  :active,
  :hover,
  :focus {
    outline: 0;
    outline-offset: 0;
  }
`;

const Wrapper = styled.div`
  
`;

export { InputStyled, Wrapper };
