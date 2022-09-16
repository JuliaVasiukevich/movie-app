import React from "react";
import { useDispatch } from "react-redux";
import { signOut } from "store/features/userSlice";
import { SignOutButton } from "./styles";

export const UserState = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(signOut());
  };

  return (
    <div>
      Hi, you are sign in
      <SignOutButton onClick={handleClick}> Sign out</SignOutButton>
    </div>
  );
};
