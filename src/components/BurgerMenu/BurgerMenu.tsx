import { Navbar } from "components";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BurgerIcon, Absolute, Wrapper, Backdround } from "./styles";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <BurgerIcon onClick={toggleOpen}>
        <Wrapper>{isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}</Wrapper>
      </BurgerIcon>
      <Absolute>
        <AnimatePresence>
          {isOpen && (
            <Backdround
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
            >
              <Navbar toggleOpen={toggleOpen} />
            </Backdround>
          )}
        </AnimatePresence>
      </Absolute>
    </>
  );
};
