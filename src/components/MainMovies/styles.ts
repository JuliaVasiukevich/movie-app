import styled from "styled-components";
import { Screen } from "ui";

const MovieList = styled.ul`
  display: flex;
  width: calc(100vw - 350px);
  padding-bottom: 10px;
  ;

  ${Screen.MD}{
    width: 80vw;
  };

  ${Screen.S}{
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  };
`;


const NextButton = styled.button`
  background-color: rgba(28, 28, 28, 0);
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export { MovieList, NextButton };
