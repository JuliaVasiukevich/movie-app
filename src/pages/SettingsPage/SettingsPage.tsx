import React from "react";
import { Navigate } from "react-router-dom";
import { ColorMode } from "../../components";
import { ROUTE } from "../../routes";
import { Form, Setting, SettingName, SettingWrapper } from "./styles";

export const SettingsPage = () => {
  const isAuth = true;

  return isAuth ? (
    <Form>
      <Setting>
        <SettingName>Profile</SettingName>
        <SettingWrapper></SettingWrapper>
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
  ) : (
    <Navigate to={`/${ROUTE.SIGN_UP} `} />
  );
};
