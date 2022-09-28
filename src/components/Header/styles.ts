import styled from "styled-components";
import { Color, Screen } from "../../ui";

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 900;
  display: grid;
  grid-template-columns: 200px 1fr auto auto;
  grid-gap: 1rem;
  align-items: center;
  grid-area: header;
  margin-bottom: 56px;
  padding: 10px;
  background-color: ${Color.Background_primary};

  ${Screen.MD} {
    grid-template-columns: 200px 1fr; 
  }
`;

export { Wrapper };
