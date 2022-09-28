import { Screen } from "./../../ui/breakpoints";
import styled from "styled-components";
import { Color } from "ui/colors";

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

  ${Screen.MD}{
    width: 90vw;
  }
`;


const NextButton = styled.button`
  background-color: rgba(28, 28, 28, 0);
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export { MovieList, NextButton };