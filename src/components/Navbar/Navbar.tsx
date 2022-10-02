import { ROUTE } from "../../routes";
import { NavbarItem, NavbarList, NavigationConteiner } from "./styles";
import { FavoriteIcon, HomeIcon, SettingsIcon, TrendsIcon } from "../../assets";
import { CustomLink } from "../CustomLink/CustomLink";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
        >
          {navigationItems.map((navigationItem) => {
            return (
              <NavbarItem key={navigationItem.text}>
                <CustomLink to={navigationItem.route}>
                  {navigationItem.img} {navigationItem.text}
                </CustomLink>
              </NavbarItem>
            );
          })}
        </motion.div>
      </NavbarList>
    </NavigationConteiner>
  );
};
