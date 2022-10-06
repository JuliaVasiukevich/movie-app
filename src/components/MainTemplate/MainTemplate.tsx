import { Outlet } from "react-router-dom";
import { Navbar, Header } from "components";
import { Wrapper, ContentWrapper } from "./styles";
import { useTheme, useWindowSize } from "hooks";
import { breakpoint } from "ui";

export const MainTemplate = () => {
  const { width } = useWindowSize();
  useTheme();

  return (
    <Wrapper>
      <Header />
      <ContentWrapper style={{ display: "flex" }}>
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
