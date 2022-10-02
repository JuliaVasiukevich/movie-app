import { Route, Routes } from "react-router-dom";
import { MainTemplate, AuthTemplate, RequareAuth } from "./components";

import {
  HomePage,
  TrendsPage,
  FavoritesPage,
  SettingsPage,
  SignInPage,
  SignUpPage,
  NotFoundPage,
  DetailsMoviePage,
  SearchPage,
  ForgotPasswordPage
} from "./pages";
import { ROUTE } from "./routes";

export const App = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTE.TRENDS} element={<TrendsPage />} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
        <Route path={ROUTE.SEARCH} element={<SearchPage />} />
        <Route path={ROUTE.DETAILS} element={<DetailsMoviePage />} />
        <Route element={<RequareAuth />}>
          <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
          <Route path={ROUTE.SETTINGS} element={<SettingsPage />} />
        </Route>
      </Route>
      <Route element={<AuthTemplate />}>
        <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
        <Route path={ROUTE.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
        <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
      </Route>
    </Routes>
  );
};

export default App;
