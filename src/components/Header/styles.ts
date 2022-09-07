import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr auto auto;
  grid-gap: 1rem;
  align-items: center;
  grid-area: header;
  margin-bottom: 56px;
`;

export { Wrapper };
