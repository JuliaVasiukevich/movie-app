import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "store/features/userSlice";
import { SignOutButton } from "./styles";

export const UserState = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(signOut());
  };
  const { email } = useSelector((state: any) => {
    return state.user;
  });

  return (
    <div>
      Hi, {email}
      <SignOutButton onClick={handleClick}> Sign out</SignOutButton>
    </div>
  );
};
