import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainTemplate, AuthTemplate } from "./components";
import {
  HomePage,
  TrendsPage,
  FavoritesPage,
  SettingsPage,
  SignInPage,
  SignUpPage,
  NotFoundPage,
} from "./pages";
import { ROUTE } from "./routes/index";

function App() {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTE.TRENDS} element={<TrendsPage />} />
        <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
        <Route path={ROUTE.SETTINGS} element={<SettingsPage />} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
      <Route path={ROUTE.HOME} element={<AuthTemplate />}>
        <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
        <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
        <Route path={`/${ROUTE.NOT_FOUND}`} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
