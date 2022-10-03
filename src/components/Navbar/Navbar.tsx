import { ROUTE } from "routes";
import { NavbarItem, NavbarList, NavigationConteiner } from "./styles";
import { FavoriteIcon, HomeIcon, SettingsIcon, TrendsIcon } from "assets";
import { motion, AnimatePresence } from "framer-motion";
import { CustomLink } from "components";

interface IProps {
  isOpen?: boolean;
}

export const Navbar = (isOpen: IProps) => {
  const navigationItems = [
    { text: "Home", route: ROUTE.HOME, img: <HomeIcon /> },
    { text: "Favorites", route: ROUTE.FAVORITES, img: <FavoriteIcon /> },
    { text: "Trends", route: ROUTE.TRENDS, img: <TrendsIcon /> },
    { text: "Settings", route: ROUTE.SETTINGS, img: <SettingsIcon /> },
  ];

  return (
    <NavigationConteiner>
      <NavbarList>
        {isOpen && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
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
          </AnimatePresence>
        )}
      </NavbarList>
    </NavigationConteiner>
  );
};
