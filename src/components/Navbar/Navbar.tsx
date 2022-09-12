import { ROUTE } from "../../routes";
import { NavbarItem, NavbarList, NavigationConteiner } from "./styles";
import { FavoriteIcon, HomeIcon, SettingsIcon, TrendsIcon } from "../../assets";
import { CustomLink } from "../CustomLink/CustomLink";
import { Route } from "react-router-dom";

export const Navbar = () => {
  const navigationItems = [
    { text: "Home", route: ROUTE.HOME, img: <HomeIcon /> },
    { text: "Favorites", route: ROUTE.FAVORITES, img: <FavoriteIcon /> },
    { text: "Trends", route: ROUTE.TRENDS, img: <TrendsIcon /> },
    { text: "Settings", route: ROUTE.SETTINGS, img: <SettingsIcon /> },
  ];

  return (
    <NavigationConteiner>
      <NavbarList>
        {navigationItems.map((navigationItem) => {
          return (
            <NavbarItem key={navigationItem.text}>
              <CustomLink to={navigationItem.route}>
                {navigationItem.img} {navigationItem.text}
              </CustomLink>
            </NavbarItem>
          );
        })}
      </NavbarList>
    </NavigationConteiner>
  );
};
