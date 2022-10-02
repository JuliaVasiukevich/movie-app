import { Input, UserState, BurgerMenu } from "components";
import { useInput, useWindowSize } from "hooks";
import { KeyboardEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addToSearch } from "store/features/movieSearchSlice";
import { useAppDispatch } from "store/hooks/hooks";
import { breakpoint } from "ui";
import { ROUTE } from "routes";
import { Wrapper, LogoIconHeader, Search } from "./styles";

export const Header = () => {
  const { width } = useWindowSize();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const searchWord = useInput();

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    
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
