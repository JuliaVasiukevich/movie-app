import { Navbar } from "components";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BurgerIcon, Absolute, Wrapper } from "./styles";

export const BurgerMenu = () => {
  const [nav, setNav] = useState(false);
  return (
    <div onClick={() => setNav(!nav)}>
      {nav ? (
        <BurgerIcon>
          <Wrapper>
            <AiOutlineClose />
          </Wrapper>
          <Absolute>
            <Navbar />
          </Absolute>
        </BurgerIcon>
      ) : (
        <BurgerIcon>
          <Wrapper>
            <AiOutlineMenu />
          </Wrapper>
        </BurgerIcon>
      )}
    </div>
  );
};
