import { motion } from "framer-motion";
import styled from "styled-components";
import { Color } from "ui";

const BurgerIcon = styled(motion.div)`
  grid-area: burger;
  cursor: pointer;
`;

const Absolute = styled.div`
  position: absolute;
  top: 125px;
  left: 0;
  height: calc(100vh - 165px);
  padding: 0px;
`;

const Backdround = styled(motion.div)`
  background-color: ${Color.Background_primary};
  height: calc(100vh - 130px);
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

export { BurgerIcon, Absolute, Wrapper, Backdround };