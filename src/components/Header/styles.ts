import { LogoIcon } from "assets";
import styled from "styled-components";
import { Color, Screen } from "../../ui";

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  display: grid;
  grid-template-columns: 200px 1fr auto auto;
  grid-gap: 1rem;
  align-items: center;
  grid-area: header;
  margin-bottom: 56px;
  padding: 40px 40px 10px;
  background-color: ${Color.Background_primary};

  ${Screen.MD} {
    padding: 20px 20px 10px;
    grid-template-columns: repeat(2, auto);
    grid-template-areas: "logo burger"
    "search search" ; 
    justify-content: space-between;
  }
`;

const LogoIconHeader = styled(LogoIcon)`
 ${Screen.MD} {
   width: 200px;
    grid-area: logo;
  }
`;

const Search = styled.div`
 ${Screen.MD} {
   grid-area: search;
  }
`;

export { Wrapper, LogoIconHeader, Search };
