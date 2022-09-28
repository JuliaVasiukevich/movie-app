import styled from "styled-components";
import { Color } from "ui/colors";
import { H4 } from "ui/typography";

const Error = styled(H4)`
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Color.Error};
`;

const ErrorWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: calc(100vw - 350px);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
  width: calc(100vw - 350px);
`;

export { Error, Wrapper, ErrorWrapper };
