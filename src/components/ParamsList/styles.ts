import styled from "styled-components";
import { Color } from "ui";

const Wrapper = styled.ul`
height: 30px;
display: flex;
`;

const ParamItem = styled.li`
display: flex;
padding: 8px;
  background-color: ${Color.Graphite};
  border-radius: 10px;
`;

export { Wrapper, ParamItem }