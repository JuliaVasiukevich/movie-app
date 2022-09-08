import styled from "styled-components";
import { Color } from "../../ui/colors";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Setting = styled.div`
  margin-bottom: 40px;
`;

const SettingName = styled.h2``;

const SettingWrapper = styled.div`
  width: 100%;
  background-color: ${Color.Background_primary_dark};
  border-radius: 10px;
  padding: 24px 40px;
`;

export { Form, Setting, SettingName, SettingWrapper };
