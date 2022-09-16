import styled from "styled-components";
import { Color } from "ui/colors";

const MovieItem = styled.li`
  list-style: none;
  width: 200px;
  margin-right: 10px;
  color: ${Color.Secondary};
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

const Poster = styled.img`
  height: 250px;
  width: 170px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;

`;

const Title = styled.h4`
  flex: 1 1 auto;
  width: 170px;
  height: 37px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const Description = styled.p``;

export { MovieItem, Poster, Title, Description };
