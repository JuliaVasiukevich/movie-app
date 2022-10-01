import styled from "styled-components";
import { Color } from "../../ui/colors";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Description = styled.div`
  font-size: 16px;
  line-height: 24px;
`;

const Title = styled.p`
  font-weight: 700;
`;

const Subtitle = styled.p``;

const Switch = styled.div`
  display: flex;
  align-items: center;
`;

const SLabel = styled.label`
  position: relative;
  display: block;
  width: 32px;
  height: 20px;
  background: ${Color.Background_primary};
  border-radius: 10px;
  cursor: pointer;

  :after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    background: ${Color.White};
    border-radius: 50%;
    transition: 0.3s;
  }
  :active:after {
    width: 20px;
  }
`;

const SInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  :checked + label {
    background: ${Color.Primary};
  }

  :checked + label:after {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;

export { Wrapper, Description, Title, Subtitle, Switch, SInput, SLabel };
