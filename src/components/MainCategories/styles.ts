import styled from "styled-components";
import { Color } from "ui/colors";
import { H3 } from "ui/typography";

const StyledList = styled.li`
  height: 400px;
`;

const Error = styled(H3)`
  color: ${Color.Error};
`;

export { StyledList, Error }