import { Input, UserState, Navbar, BurgerMenu } from "components";
import { useInput, useWindowSize, useDebounce } from "hooks";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addToSearch } from "store/features/movieSearchSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelectors";
import { breakpoint } from "ui";
import { LogoIcon } from "../../assets";
import { ROUTE } from "../../routes";
import { Wrapper, LogoIconHeader, Search } from "./styles";

export const Header = () => {
  const { isAuth } = useAppSelector(getUserInfo);
  const { width } = useWindowSize();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const searchWord = useInput();

  const onKeyDown = (e: any) => {
    
    if (e.key === "Enter") {
      dispatch(addToSearch(searchWord.value));
      navigate(ROUTE.SEARCH);
    }
  };

  return (
    <Wrapper>
      <Link to={ROUTE.HOME}>
        <LogoIconHeader />
      </Link>
      <Search>
        <Input onKeyDown={onKeyDown} {...searchWord} placeholder="search"/>
      </Search>
      {width && width > breakpoint.MD ? <UserState /> : <BurgerMenu />}
    </Wrapper>
  );
};
