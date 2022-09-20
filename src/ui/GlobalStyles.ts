import { resetCSS } from "./reset";
import { createGlobalStyle } from "styled-components";
import { Color } from "./colors";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
${resetCSS}
${theme}

@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700;900&display=swap');

body {
    font-family: 'Exo 2', sans-serif;
    background-color: ${Color.Background_primary};
    color: ${Color.Text_primary};
}

a {
    color: ${Color.Secondary};
   }
`;
