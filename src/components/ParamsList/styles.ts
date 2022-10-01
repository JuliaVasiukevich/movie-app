import styled from "styled-components";
import { Color } from "ui";

const Wrapper = styled.ul`
  position: absolute;
  top: 10px;
  left: 10px;
  height: 30px;
  display: flex;
`;

const ParamItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background-color: ${Color.Graphite};
  border-radius: 10px;
  margin-right: 5px;
`;

export { Wrapper, ParamItem };