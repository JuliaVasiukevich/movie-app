import styled from "styled-components";
import { Color } from "ui";

const BurgerIcon = styled.div`
grid-area: burger;
/* align-self: flex-end; */
/* justify-self: end; */
`;

const Absolute = styled.div`
position: absolute;
top: 120px;
left: 0;
background-color: ${Color.Background_primary};
height: 100vh;
padding: 20px;
`;

export { BurgerIcon, Absolute };