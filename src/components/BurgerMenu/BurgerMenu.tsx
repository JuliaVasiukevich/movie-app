import { Navbar } from "components";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BurgerIcon, Absolute, Wrapper } from "./styles";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      <BurgerIcon>
        <Wrapper>{isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}</Wrapper>
        <AnimatePresence>
          {isOpen && (
            <Absolute>
              <Navbar isOpen={isOpen} />
            </Absolute>
          )}
        </AnimatePresence>
      </BurgerIcon>
    </div>
  );
};
