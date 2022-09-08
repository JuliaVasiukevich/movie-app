import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../../ui/colors";

const BasicLink = styled(Link)`
  &&& {
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 23px;
    fill: ${Color.Secondary};
  }
`;

const ActiveLink = styled(BasicLink)`
  color: ${Color.Primary};
  fill: ${Color.Primary} !important;
`;

export { ActiveLink, BasicLink };
