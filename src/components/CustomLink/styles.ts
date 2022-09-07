import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../../ui/colors";

const ActiveLink = styled(Link) `&&& {
    color: ${Color.Primary}
}
`;

export {ActiveLink}