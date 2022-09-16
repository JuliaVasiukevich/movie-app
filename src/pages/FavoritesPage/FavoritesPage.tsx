import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ROUTE } from "../../routes";

export const FavoritesPage = () => {
  const { isAuth } = useSelector((state: any) => {
    return state.user;
  });
  return isAuth ? <div>FavoritesPage</div> : <Navigate to={`/${ROUTE.SIGN_UP} `} />;
};
