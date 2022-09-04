import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Header } from "../index";
import { Wrapper } from "./styles";

export const MainTemplate = () => {
  return (
    <Wrapper>
      <Header />
      <Navbar />
      <Outlet />
    </Wrapper>
  );
};
