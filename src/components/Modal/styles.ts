import styled from "styled-components";
import { Color, H3 } from "ui";

const Container = styled.div`
  position: absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  padding: 40px;
  border-radius: 20px;
  z-index: 3;
  background-color: ${Color.Background_primary_dark};
`;

const Title = styled(H3)`
  color: ${Color.Secondary};
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 100%;
  padding: 16px;
  margin-bottom: 32px;
  background-color: ${Color.Primary};
  color: ${Color.White};
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const BlurWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(5px);
  background-color: rgba(0,0,0,0.1);
`;

export { Container, Title, Button, BlurWrapper };