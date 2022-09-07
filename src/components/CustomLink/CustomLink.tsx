import React, { ReactNode } from "react";
import { Link, useMatch } from "react-router-dom";
import { ROUTE } from "../../routes";
import { ActiveLink } from "./styles";

interface IProps {
  children: ReactNode;
  to: ROUTE;
}

export const CustomLink = ({ to, children }: IProps) => {
  const isActive = useMatch(to);
  if (isActive) {
    return (
        <ActiveLink to={to}>{children}</ActiveLink>
    );
  } else {
    return <Link to={to}>{children}</Link>;
  }
};
