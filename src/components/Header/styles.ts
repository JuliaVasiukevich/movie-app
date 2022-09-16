import styled from "styled-components";
import { Color } from "../../ui/colors";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr auto auto;
  grid-gap: 1rem;
  align-items: center;
  grid-area: header;
  margin-bottom: 56px;
  position: sticky;
  top: 0;
  padding: 10px;
  background-color: ${Color.Background_primary};

  @media (max-width: 768px) {
    grid-template-columns: 200px 1fr; 
  }
`;

export { Wrapper };
