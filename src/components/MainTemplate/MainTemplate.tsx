import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Header } from "../index";
import { Wrapper, ContentWrapper } from "./styles";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useWindowSize } from "hooks";
import { breakpoint } from "../../ui/breakpoints";

export const MainTemplate = () => {
  const { width } = useWindowSize();

  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        {width && width > breakpoint.MD ? (
          <>
            <Navbar /> <Outlet />
          </>
        ) : (
          <Outlet />
        )}
      </ContentWrapper>
    </Wrapper>
  );
};
