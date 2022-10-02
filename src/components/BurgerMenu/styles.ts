import styled from "styled-components";
import { Color } from "ui";

const BurgerIcon = styled.div`
  grid-area: burger;
  cursor: pointer;
`;

const Absolute = styled.div`
  position: absolute;
  top: 135px;
  left: 0;
  background-color: ${Color.Background_primary};
  height: 100vh;
  padding: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  font-size: 20px;
  line-height: 24px;
  background-color: ${Color.Primary};
  color: ${Color.White};
  border-radius: 10px;
  margin-right: 0.3rem;
`;

export { BurgerIcon, Absolute, Wrapper };