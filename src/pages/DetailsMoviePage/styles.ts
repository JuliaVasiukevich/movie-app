import { Color } from "./../../ui/colors";
import styled from "styled-components";
import { H1 } from "ui/typography";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieWrapper = styled.div`
  display: flex;
`

const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 170px;
  margin-right: 42px;
`;

const PosterImg = styled.img`
  height: 250px;
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

const BadgeIMDB = styled.div`
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
  grid-template-columns: 150px 1fr;
  margin-bottom: 40px;
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


export {
  Wrapper, ImgWrapper, PosterImg,
  FavoritesButton, DescriptionWrapper,
  TypeMovie, TitleMovie,
  Badges, BadgeIMDB,
  Description, DataGrid,
  MovieWrapper, DisFavoritesButton,
  MovieButton, ShareButton
};