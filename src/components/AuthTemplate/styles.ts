import styled from "styled-components";
import { authBackground } from "../../assets";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-image: ${authBackground};
  background-size: contain;
  background-repeat: no-repeat;
`;

const WrapperLink = styled.div`

`;

const Footer = styled.div`

`;

export { Wrapper, WrapperLink, Footer };
