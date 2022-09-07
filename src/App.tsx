import React from "react";
import { Route, Routes } from "react-router-dom";
// import { ThemeProvider } from "styled-components";
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

// const theme = {
//   dark: {
//     primary: "#7B61FF",
//     primary_light: "#917CFF",
//     secondary: "#80858B",
//     background_primary: "#000000",
//     background_primary_dark: "#242426",
//     background_graphite: "#323537",
//     error: "#FF5154",
//     text_primary: "#FFFFFF",
//   },
//   light: {
//     primary: "#7B61FF",
//     primary_light: "#917CFF",
//     secondary: "#80858B",
//     background_primary: "#FFFFFF",
//     background_primary_dark: "#242426",
//     background_graphite: "#323537",
//     error: "#FF5154",
//     text_primary: "#000000",
//   },
// };

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
        <Route element={<AuthTemplate />}>
          <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
          <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
        </Route>
      </Routes>
  );
}

export default App;
