import styled from "styled-components";

const NavbarList = styled.ul`
  grid-area: navbar;
`;

const NavbarItem = styled.li`
  list-style: none;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 23px;
`;

export { NavbarList, NavbarItem };