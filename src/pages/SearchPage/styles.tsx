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
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100vw - 500px);
  flex-grow: 2;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(100vw - 500px);
  padding-top: 70px;
`;

const FilterContainer = styled.div`
  background: ${Color.Background_primary};
  box-shadow: ${Color.Background_primary_dark} 0px 29px 29px 0px;
`;

const ErrorFilterContainer = styled(FilterContainer)`
  height: calc(100vh - 155px);
`;

export { Error, ErrorWrapper, FilterContainer, ErrorFilterContainer, Wrapper };
