import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, Screen, H4 } from "ui";

const Error = styled(H4)`
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Color.Error};
`;

const ErrorWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100vw - 500px);
  flex-grow: 2;

  ${Screen.MD} {
    width: auto;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(100vw - 500px);
  padding-top: 70px;

  ${Screen.MD} {
    width: auto;
  }
`;

const MovieWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FilterButton = styled(motion.button)`
  position: fixed;
  top: 300px;
  right: -85px;
  z-index: 5;
  font-size: 16px;
  padding: 8px;
  background-color: ${Color.Primary};
  color: ${Color.White};
  border: 1px solid ${Color.White};
  border-radius: 5px 5px 0 0;
  transform: rotate(-90deg);
  transform-origin: top left;
  cursor: pointer;

  :hover{
    filter: grayscale(0.75);
  }
`;

const FilterContainer = styled.div`
  background: ${Color.Background_primary};
  box-shadow: ${Color.Background_primary_dark} 0px 29px 29px 0px;

  ${Screen.MD} {
    box-shadow: none;
  }
`;

const ErrorFilterContainer = styled(FilterContainer)`
  height: calc(100vh - 155px);
`;

const Sticky = styled.div`
  position: fixed;
  top: 200px;
  right: 0px;
  width: 200px;
`;

export {
  Error,
  ErrorWrapper,
  FilterContainer,
  ErrorFilterContainer,
  Wrapper,
  MovieWrapper,
  FilterButton,
  Sticky,
};
