import styled from "styled-components";
import { authBackground } from "assets";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 40px;
  background: black;
  background-image: url(${authBackground});
  background-repeat: no-repeat;
  background-size: cover;
`;

const WrapperLink = styled.div``;

const Footer = styled.div`
  text-align: center;
  margin-top: 64px;
`;

export { Wrapper, WrapperLink, Footer };
