import { UserState } from "components/UserState/UserState";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../assets";
import { ROUTE } from "../../routes";
import { Input } from "../index";
import { Wrapper } from "./styles";

export const Header = () => {
  const { isAuth } = useSelector((state: any) => {
    return state.user;
  });

  return (
    <Wrapper>
      <Link to={ROUTE.HOME}>
        <LogoIcon />
      </Link>
      <Input placeholder="search" />
      {isAuth ? (
        <UserState />
      ) : (
        <>
          <Link to={ROUTE.SIGN_IN}>Sign in</Link>
          <Link to={ROUTE.SIGN_UP}>Sign up</Link>
        </>
      )}
    </Wrapper>
  );
};
