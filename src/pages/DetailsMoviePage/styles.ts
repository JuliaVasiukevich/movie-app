import { Color } from "./../../ui/colors";
import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
`

const ImgWrapper = styled.div`
display: flex;
flex-direction: column;
width: 170px;
margin-right: 42px;
`

const PosterImg = styled.img`
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 30px;
`;

const FavoritesButton = styled.button`
`
const DescriptionWrapper = styled.div`
display: flex;
flex-direction: column;
`

const TypeMovie = styled.p`
color: ${Color.Secondary};
`

const TitleMovie = styled.h1`
color: white;
`

const Badges = styled.div`
display: flex;
margin-bottom: 40px;
`

const BadgeIMDB = styled.div`
padding: 8px;
background-color: ${Color.Graphite};
border-radius: 10px;
margin-right: 20px;
`

const Description = styled.p`
margin-bottom: 40px;

`

const DataGrid = styled.div`
display: grid;
grid-template-columns: 150px 1fr;
margin-bottom: 40px;
`


export {
    Wrapper, ImgWrapper, PosterImg,
    FavoritesButton, DescriptionWrapper,
    TypeMovie, TitleMovie,
    Badges, BadgeIMDB,
    Description, DataGrid
};