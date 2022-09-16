import styled from "styled-components";

const NavigationConteiner = styled.div``;

const NavbarList = styled.ul`
  position: sticky;
  top: 60px;
  left: 0;
  right: 0;
  width: 200px;
`;

const NavbarItem = styled.li`
  margin-bottom: 40px;
  list-style: none;
`;

export { NavbarList, NavbarItem, NavigationConteiner };
