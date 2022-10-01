import { Outlet } from "react-router-dom";
import { Navbar, Header } from "../index";
import { Wrapper, ContentWrapper } from "./styles";
import { useTheme, useWindowSize } from "hooks";
import { breakpoint } from "../../ui/breakpoints";

export const MainTemplate = () => {
  const { width } = useWindowSize();
  useTheme();

  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        {width && width > breakpoint.MD ? (
          <>
            <Navbar /> <Outlet />
          </>
        ) : (
          <Outlet />
        )}
      </ContentWrapper>
    </Wrapper>
  );
};
