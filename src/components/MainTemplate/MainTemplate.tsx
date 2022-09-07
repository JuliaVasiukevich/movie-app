import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Header } from "../index";
import { Wrapper, ContentWrapper } from "./styles";

export const MainTemplate = () => {
  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        <Navbar />
        <Outlet />
      </ContentWrapper>
    </Wrapper>
  );
};
