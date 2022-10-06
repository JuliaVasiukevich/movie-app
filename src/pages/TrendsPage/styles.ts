import styled from "styled-components";
import { Screen } from "ui";

const TrendsStyled = styled.div`
display: flex;
justify-content: flex-start;
flex-wrap:wrap;
padding-inline: 40px;

${Screen.S} {
  padding-inline: 0px;
}
`;

export { TrendsStyled };