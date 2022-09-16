import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "store/features/userSlice";
import { LogOutButton } from "./styles";

export const UserState = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logOut());
  };
  const { email } = useSelector((state: any) => {
    return state.user;
  });

  return (
    <div>
      Hi, {email}
      <LogOutButton onClick={handleClick}> Sign out</LogOutButton>
    </div>
  );
};
