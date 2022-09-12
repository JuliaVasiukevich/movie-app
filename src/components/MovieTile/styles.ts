import styled from "styled-components";
import { Color } from "ui/colors";

const MovieItem = styled.li`
  list-style: none;
  width: 200px;
  margin-right: 10px;
  color: ${Color.Light};
`;

const Poster = styled.img`
  height: 250px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export { MovieItem, Poster };
