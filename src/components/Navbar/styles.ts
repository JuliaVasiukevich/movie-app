import styled from "styled-components";

const NavigationConteiner = styled.div``;

const NavbarList = styled.ul`
  position: sticky;
  top: 100px;
  left: 0;
  right: 0;
  width: 200px;
  padding-left: 40px;
  padding-top: 0px;
`;

const NavbarItem = styled.li`
  margin-bottom: 40px;
`;

export { NavbarList, NavbarItem, NavigationConteiner };
