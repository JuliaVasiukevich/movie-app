import React, { ReactNode } from "react";
import { useMatch } from "react-router-dom";
import { HomeIcon } from "../../assets";
import { ROUTE } from "../../routes";
import { ActiveLink, BasicLink } from "./styles";

interface IProps {
  children: ReactNode;
  to: ROUTE;
}

const iconMap = {
  home: HomeIcon,
};

export const CustomLink = ({ to, children }: IProps) => {
  const isActive = useMatch(to);
  if (isActive) {
    return (
      <>
        <ActiveLink to={to}>{children}</ActiveLink>
      </>
    );
  } else {
    return <BasicLink to={to}>{children}</BasicLink>;
  }
};
