import styled from "styled-components";
import { Color } from "ui/colors";
import { H4 } from "ui/typography";

const MovieList = styled.ul`
  display: flex;
  width: calc(100vw - 350px);
  padding-bottom: 10px;
  overflow-x: auto;

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${Color.Background_primary_dark};
  }
`;

const Error = styled(H4)`
  color: ${Color.Error};
`;

export { MovieList, Error };