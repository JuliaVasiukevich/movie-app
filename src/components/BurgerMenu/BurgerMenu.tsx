import { Navbar, UserState } from "components";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelectors";
import { BurgerIcon, Absolute } from "./styles";

export const BurgerMenu = () => {
  const [nav, setNav] = useState(false);
  const { email } = useAppSelector(getUserInfo);
  return (
    <div onClick={() => setNav(!nav)}>
      {nav ? (
        <BurgerIcon>
          <AiOutlineClose />
          <Absolute>
            {email}
            <Navbar />
          </Absolute>
        </BurgerIcon>
      ) : (
        <BurgerIcon>
          <AiOutlineMenu />
        </BurgerIcon>
      )}
    </div>
  );
};
