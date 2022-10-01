import styled from "styled-components";
import { Color, Screen, H3, H2 } from "../../ui";

const StyledList = styled.li`
  height: 400px;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;

  ${Screen.S} {
    height: auto;
    padding: 30px;
  }
`;

const Error = styled(H3)`
  color: ${Color.Error};
`;

const Title = styled(H2)`
`;

const CategoryList = styled.ul`
  padding-inline: 40px;

  ${Screen.S} {
    padding-inline: 30px;
  }
`;

export { StyledList, Error, CategoryList, Title };