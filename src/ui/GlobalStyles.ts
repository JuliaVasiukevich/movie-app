import { createGlobalStyle } from "styled-components";
import { Color } from "./colors";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700;900&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html[data-theme="dark"] {
--primary: #7B61FF;
--primary_light: #917CFF;
--secondary: #80858B;
--background_primary:#000000;
--background_primary_dark: #242426;
--background_graphite: #323537;
--error: #FF5154;
--text_primary: #FFFFFF;
}

html[data-theme="light"] {
--primary: #7B61FF;
--primary_light:#917CFF;
--secondary: #80858B;
--background_primary:#FFFFFF;
--background_primary_dark: #242426;
--background_graphite: #323537;
--error: #FF5154;
--text_primary: #000000;
}

body {
    font-family: 'Exo 2', sans-serif;
    background-color: ${Color.Background_primary};
    color: ${Color.Text_primary};
}

a {
    text-decoration: none; 
    color: ${Color.Secondary};
   }
`;
