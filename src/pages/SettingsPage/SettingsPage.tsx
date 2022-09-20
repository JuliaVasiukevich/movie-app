import { ColorMode } from "../../components";
import { Form, Setting, SettingName, SettingWrapper } from "./styles";
import { useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelectors";

export const SettingsPage = () => {
  const { email } = useAppSelector(getUserInfo);
  //TODO: добавить кнопки
  return (
    <Form>
      <Setting>
        <SettingName>Profile</SettingName>
        <SettingWrapper>
          <p>email: {email}</p>
        </SettingWrapper>
      </Setting>
      <Setting>
        <SettingName>Password</SettingName>
        <SettingWrapper></SettingWrapper>
      </Setting>
      <Setting>
        <SettingName>ColorMode</SettingName>
        <SettingWrapper>
          <ColorMode />
        </SettingWrapper>
      </Setting>
    </Form>
  );
};
