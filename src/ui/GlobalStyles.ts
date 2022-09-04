import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700;900&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: 'Exo 2', sans-serif;
    background-color: black;
    color: white;
}
a {
    text-decoration: none; 
    color: gray;
   }

`;
