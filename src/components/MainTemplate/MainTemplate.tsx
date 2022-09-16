import { useWindowSize } from "hooks/useWindowSize";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Header } from "../index";
import { Wrapper, ContentWrapper } from "./styles";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const MainTemplate = () => {
  const { width } = useWindowSize();
  const [nav, setNav] = useState(false);

  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        {width && width < 768 ? (
          <div>
            <div onClick={() => setNav(!nav)}>
              {nav ? (
                <>
                  <AiOutlineClose />
                  <Navbar />
                </>
              ) : (
                <AiOutlineMenu />
              )}
            </div>
          </div>
        ) : (
          <Navbar />
        )}
        <Outlet />
      </ContentWrapper>
    </Wrapper>
  );
};
