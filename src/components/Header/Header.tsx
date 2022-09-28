import { Input, UserState, Navbar } from "components";
import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelectors";
import { LogoIcon } from "../../assets";
import { ROUTE } from "../../routes";
import { Wrapper } from "./styles";

export const Header = () => {
  const { isAuth } = useAppSelector(getUserInfo);

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
