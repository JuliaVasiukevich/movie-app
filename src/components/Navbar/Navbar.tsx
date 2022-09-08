import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../routes";
import { NavbarItem, NavbarList, NavigationConteiner } from "./styles";
import { FavoriteIcon, HomeIcon, SettingsIcon, TrendsIcon } from "../../assets";
import { CustomLink } from "../CustomLink/CustomLink";

export const Navbar = () => {
  return (
    <NavigationConteiner>
      <NavbarList>
        <NavbarItem>
          <CustomLink to={ROUTE.HOME}>
            <HomeIcon /> Home
          </CustomLink>
        </NavbarItem>
        <NavbarItem>
          <CustomLink to={ROUTE.FAVORITES}>
            <FavoriteIcon /> Favorites
          </CustomLink>
        </NavbarItem>
        <NavbarItem>
          <CustomLink to={ROUTE.TRENDS}>
            <TrendsIcon /> Trends
          </CustomLink>
        </NavbarItem>
        <NavbarItem>
          <CustomLink to={ROUTE.SETTINGS}>
            <SettingsIcon /> Settings
          </CustomLink>
        </NavbarItem>
      </NavbarList>
    </NavigationConteiner>
  );
};
