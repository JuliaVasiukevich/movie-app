import styled from "styled-components";
import { Color } from "ui";

const Spinner = styled.div`
  width: 75px;
  height: 75px;
  border: 1px solid ${Color.Primary};
  border-top: 4px solid ${Color.Primary_light};
  border-right: 4px solid transparent;
  border-radius: 50%;
  animation: 1s spin linear infinite;

  @keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export { Spinner };
