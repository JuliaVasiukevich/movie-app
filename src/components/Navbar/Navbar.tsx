import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../routes";
import { NavbarItem, NavbarList } from "./styles";
import { FavoriteIcon, HomeIcon, SettingsIcon, TrendsIcon } from "../../assets";
import { CustomLink } from "../CustomLink/CustomLink";

export const Navbar = () => {
  return (
    <NavbarList>
      <NavbarItem>
        <HomeIcon />
        <CustomLink to={ROUTE.HOME}> Home </CustomLink>
      </NavbarItem>
      <NavbarItem>
        <FavoriteIcon />
        <CustomLink to={ROUTE.FAVORITES}> Favorites</CustomLink>
      </NavbarItem>
      <NavbarItem>
        <TrendsIcon />
        <CustomLink to={ROUTE.TRENDS}> Trends</CustomLink>
      </NavbarItem>
      <NavbarItem>
        <SettingsIcon />
        <CustomLink to={ROUTE.SETTINGS}> Settings</CustomLink>
      </NavbarItem>
    </NavbarList>
  );
};
