import React from "react";
import { Navigate } from "react-router-dom";
import { ROUTE } from "../../routes";

export const FavoritesPage = () => {
  const isAuth = false;

  return isAuth ? <div>FavoritesPage</div> : <Navigate to={`/${ROUTE.SIGN_UP} `}/>;
};