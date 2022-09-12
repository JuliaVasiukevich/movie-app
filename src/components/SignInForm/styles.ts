import styled from "styled-components";
import { Color } from "../../ui/colors";


const Form = styled.form`
display: flex;
flex-direction: column;
padding: 40px;
width: 574px;
background: ${Color.Background_primary};
border-radius: 10px;
`;

const Label = styled.label`

`;

const Button = styled.button`
background-color: ${Color.Primary};
color: ${Color.White};
padding: 16px;
border: none;
border-radius: 10px;
`;


export { Form, Button, Label };