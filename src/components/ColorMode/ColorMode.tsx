import React from "react";
import { Wrapper, Description, Title, Subtitle, Switch, SInput, SLabel } from "./styles";

export const ColorMode = () => {
  return (
    <Wrapper>
      <Description>
        <Title>Dark</Title>
        <Subtitle>Use dark thema</Subtitle>
      </Description>
        <Switch>
          <SInput type="checkbox" id="switch" />
          <SLabel htmlFor="switch" />
        </Switch>
    </Wrapper>
  );
};
