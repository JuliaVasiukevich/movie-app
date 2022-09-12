import { useTheme } from "../../hooks/useTheme";

import {
  Wrapper,
  Description,
  Title,
  Subtitle,
  Switch,
  SInput,
  SLabel,
} from "./styles";

export const ColorMode = () => {
  const { theme, setTheme } = useTheme();

  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <Wrapper>
      <Description>
        <Title>{theme}</Title>
        <Subtitle>Use dark thema</Subtitle>
      </Description>
      <Switch>
        <SInput onClick={() => themeToggler()} type="checkbox" id="switch" />
        <SLabel htmlFor="switch" />
      </Switch>
    </Wrapper>
  );
};
