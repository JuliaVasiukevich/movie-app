import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Header } from "../index";

export const MainTemplate = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
    </>
  );
};
