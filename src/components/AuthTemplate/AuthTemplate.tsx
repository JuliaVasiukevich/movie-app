import React from "react";
import { Link, Outlet } from "react-router-dom";
import { LogoIcon } from "../../assets";
import { ROUTE } from "../../routes";
import { Footer, Wrapper, WrapperLink } from "./styles";

export const AuthTemplate = () => {
  return (
    <Wrapper>
      <WrapperLink>
        <Link to={ROUTE.HOME}>
          <LogoIcon />
        </Link>
      </WrapperLink>
      <Outlet />
      <Footer>© All Rights Reserved</Footer>
    </Wrapper>
  );
};
