import styled from "styled-components";
import { Color, Screen } from "../../ui";
import { H3 } from "ui/typography";

const StyledList = styled.li`
  height: 400px;

  ${Screen.S} {
    height: auto;
  }

`;

const Error = styled(H3)`
  color: ${Color.Error};
`;

export { StyledList, Error };