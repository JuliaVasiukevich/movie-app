import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { ROUTE } from "../../routes";
import { Input } from "../index";
import { Wrapper } from "./styles";

export const Header = () => {
  return (
    <Wrapper>
      <Link to={ROUTE.HOME}>
        <img src={logo} alt="logo" />
      </Link>
      <Input placeholder="search"></Input>
      <Link to={ROUTE.SIGN_IN}>Sign in</Link>
      <Link to={ROUTE.SIGN_UP}>Sign up</Link>
    </Wrapper>
  );
};
