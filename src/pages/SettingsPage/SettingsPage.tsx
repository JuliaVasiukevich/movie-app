import React from "react";
import { Navigate } from "react-router-dom";
import { ROUTE } from "../../routes";

export const SettingsPage = () => {
  const isAuth = false;

  return isAuth ? (
    <div>FavoritesPage</div>
  ) : (
    <Navigate to={`/${ROUTE.SIGN_UP} `} />
  );
};
