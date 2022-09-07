import styled from "styled-components";

const Wrapper = styled.div`
  padding: 40px;
  display: grid;
  grid-template-areas:
    "header header"
    "navbar content";
  grid-template-columns: 200px auto;
  grid-column-gap: 1em;
`;

export { Wrapper };
