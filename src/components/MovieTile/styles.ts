import styled from "styled-components";
import { Color } from "ui/colors";
import { Subtitle } from "ui/typography";


const MovieItem = styled.li`
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  width: 200px;
  margin: 15px;
  color: ${Color.Secondary};
`;

const Poster = styled.img`
  height: 250px;
  width: 170px;
  border-radius: 10px;
  margin-bottom: 10px;
  object-fit: cover;
`;

const Title = styled(Subtitle)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  flex: 1 1 auto;
  width: 170px;
  height: 37px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Description = styled(Subtitle)``;

export { MovieItem, Poster, Title, Description };

