import { useTheme } from "../../hooks/useTheme";

import { Wrapper, Description, Title, Subtitle, Switch, SInput, SLabel } from "./styles";

export const ColorMode = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <Wrapper>
      <Description>
        <Title>{theme}</Title>
        <Subtitle>Use dark thema</Subtitle>
      </Description>
      <Switch>
        <SInput
          onClick={handleClick}
          type="checkbox"
          id="switch"
          checked={theme === "light"}
        />
        <SLabel htmlFor="switch" />
      </Switch>
    </Wrapper>
  );
};
