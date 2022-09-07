import styled from "styled-components";
import { Color } from "../../ui/colors";

const NavigationConteiner = styled.div`
`;

const NavbarList = styled.ul`
  position: sticky;
  top: 60px;
  left: 0;
  right: 0;
  width: 200px;
`;

const NavbarItem = styled.li`
  list-style: none;
  margin-bottom: 40px;
`;

export { NavbarList, NavbarItem, NavigationConteiner };
