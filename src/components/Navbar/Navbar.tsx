import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../routes";
import { Item, Wrapper } from "./styles";

export const Navbar = () => {
  return (
    <Wrapper>
      <Item>
        <Link to={ROUTE.HOME}>Home</Link>
      </Item>
      <Item>
        <Link to={ROUTE.FAVORITES}>Favorites</Link>
      </Item>
      <Item>
        <Link to={ROUTE.TRENDS}>Trends</Link>
      </Item>
      <Item>
        <Link to={ROUTE.SETTINGS}>Settings</Link>
      </Item>
    </Wrapper>
  );
};
