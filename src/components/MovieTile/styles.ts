import { TrendsIcon } from "assets";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, Screen, Subtitle } from "ui";

const MovieItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  width: 200px;
  margin: 15px;
  color: ${Color.Secondary};

  ${Screen.S} {
    width: 80vw;
    min-width: 80vw;
    align-items: center;
  };
`;

const MovieTrendsIcon = styled(TrendsIcon)`
  position: absolute;
  left: 10px;
  top: 5px;
  height: 30px;
  width: 20px;
  padding: 5px;
  border-radius: 5px;
  fill: ${Color.White} ;
  background-color: ${Color.Primary};

  ${Screen.S} {
    left: 30px;
    top: 10px;
    height: 40px;
    width: 30px;
  };
`;

const Poster = styled.img`
  height: 250px;
  width: 170px;
  border-radius: 10px;
  margin-bottom: 10px;
  object-fit: cover;

  ${Screen.S} {
    height: 400px;
    width: 270px;
  };
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

const MovieLink = styled(Link)`
  position: relative;
`;

export { MovieItem, Poster, Title, Description, MovieTrendsIcon, MovieLink };

