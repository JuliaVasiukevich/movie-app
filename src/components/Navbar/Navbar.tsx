import { ROUTE } from "../../routes";
import { NavbarItem, NavbarList, NavigationConteiner } from "./styles";
import { FavoriteIcon, HomeIcon, SettingsIcon, TrendsIcon } from "../../assets";
import { CustomLink } from "../CustomLink/CustomLink";
import { Route } from "react-router-dom";

export const Navbar = () => {
  const items = [
    { text: "Home", route: ROUTE.HOME, img: <HomeIcon /> },
    { text: "Favorites", route: ROUTE.FAVORITES, img: <FavoriteIcon /> },
    { text: "Trends", route: ROUTE.TRENDS, img: <TrendsIcon /> },
    { text: "Settings", route: ROUTE.SETTINGS, img: <SettingsIcon /> },
  ];

  return (
    <NavigationConteiner>
      <NavbarList>
        {items.map((item) => {
          return (
            <NavbarItem>
              <CustomLink to={item.route}>
                {item.img} {item.text}
              </CustomLink>
            </NavbarItem>
          );
        })}
      </NavbarList>
    </NavigationConteiner>
  );
};
