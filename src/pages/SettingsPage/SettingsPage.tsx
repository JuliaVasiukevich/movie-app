import React from "react";
import { Navigate } from "react-router-dom";
import { ColorMode } from "../../components";
import { ROUTE } from "../../routes";
import { useSelector } from "react-redux";
import { Form, Setting, SettingName, SettingWrapper } from "./styles";
import { getAuth } from "firebase/auth";

export const SettingsPage = () => {
  const { isAuth, email } = useSelector((state: any) => {
    return state.user;
  });
//TODO: сделать адекватно
  return isAuth ? (
    <Form>
      <Setting>
        <SettingName>Profile</SettingName>
        <SettingWrapper>
          <p>{email}</p>
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
  ) : (
    <Navigate to={`/${ROUTE.SIGN_UP} `} />
  );
};