import styled from "styled-components";

const InputStyled = styled.input`
  padding: 16px 20px;
  background: #323537;
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
