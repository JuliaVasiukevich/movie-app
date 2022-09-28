import styled from "styled-components";
import { H4, Color, Screen } from "ui";

const MovieList = styled.ul`
  display: flex;
  width: calc(100vw - 350px);
  padding-bottom: 10px;
  
  ${Screen.MD}{
    width: 80vw;
  };
`;

const Error = styled(H4)`
  color: ${Color.Error};
`;

export { MovieList, Error };