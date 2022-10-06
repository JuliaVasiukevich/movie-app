import styled from "styled-components";
import { Screen } from "ui";

const FavoritesStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap:wrap;
  padding-inline: 40px;

${Screen.S} {
  padding-inline: 0px;
}
`;

const FavoritesEmpty = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

export { FavoritesStyled, FavoritesEmpty };