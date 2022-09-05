import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../routes";
import { NavbarItem, NavbarList } from "./styles";

export const Navbar = () => {
  return (
    <NavbarList>
      <NavbarItem>
        <Link to={ROUTE.HOME}>Home</Link>
      </NavbarItem>
      <NavbarItem>
        <Link to={ROUTE.FAVORITES}>Favorites</Link>
      </NavbarItem>
      <NavbarItem>
        <Link to={ROUTE.TRENDS}>Trends</Link>
      </NavbarItem>
      <NavbarItem>
        <Link to={ROUTE.SETTINGS}>Settings</Link>
      </NavbarItem>
    </NavbarList>
  );
};
