import { Color, Screen, H1 } from "./../../ui";
import styled from "styled-components";
import { TrendsIcon } from "assets";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 40px;

  ${Screen.MD} {
    padding-inline: 30px;
  }
`;

const MovieWrapper = styled.div`
  display: flex;

  ${Screen.MD} {
    flex-direction: column;
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-right: 42px;

  ${Screen.MD} {
    max-width: 400px;
    margin: 0 auto;
  }
`;

const PosterImg = styled.img`
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 30px;
`;

const FavoritesButton = styled.button`
  background-color: rgba(255,0,0,0);
  border: none;
  fill: ${Color.Secondary};
`;

const DisFavoritesButton = styled(FavoritesButton)`
  fill: ${Color.Primary} !important;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TypeMovie = styled.p`
  color: ${Color.Secondary};
`;

const TitleMovie = styled(H1)`
  color: white;
`;

const Badges = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const BadgeIMDB = styled.div<{ $rating: number }>`
  padding: 8px;
  margin-right: 20px;
  background-color: ${({ $rating }) => ($rating > 7 ? `${Color.Green}` :
    $rating > 5 ? `${Color.Yellow}` : `${Color.Orange}`)};
  border-radius: 10px;
`;

const Badge = styled.div`
  padding: 8px;
  margin-right: 20px;
  background-color: ${Color.Graphite};
  border-radius: 10px;
`;

const Description = styled.p`
  margin-bottom: 40px;
`;

const DataGrid = styled.div`
  display: grid;
  font-size: 16px;
  grid-template-columns: 150px 1fr;
  grid-row-gap: 5px;
  margin-bottom: 40px;
`;

const DataName = styled.div`
color: ${Color.Graphite};
`;

const DataValue = styled.div`
`;

const MovieButton = styled.div`
  display:flex;
  justify-content: space-around;
  padding: 20px;
  width: 100%;
  border-radius: 10px;
  background-color: ${Color.Graphite};
`;

const ShareButton = styled(FavoritesButton)`
`;

const MovieTrendsIcon = styled(TrendsIcon)`
  position: absolute;
  left: 10px;
  top: 5px;
  height: 40px;
  width: 30px;
  padding: 5px;
  border-radius: 5px;
  z-index: 3;
  fill: ${Color.White} ;
  background-color: ${Color.Primary};
`;


export {
  Wrapper, ImgWrapper, PosterImg,
  FavoritesButton, DescriptionWrapper,
  TypeMovie, TitleMovie,
  Badges, BadgeIMDB,
  Description, DataGrid,
  MovieWrapper, DisFavoritesButton,
  MovieButton, ShareButton,
  MovieTrendsIcon, Badge,
  DataName, DataValue
};