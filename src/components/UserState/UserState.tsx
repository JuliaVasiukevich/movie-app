import { useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelectors";
import { LogOutButton, Avatar, User, UserName } from "./styles";

export const UserState = () => {
  const handleClick = () => {};
  const { email } = useAppSelector(getUserInfo);

  return (
    <div>
      <User>
        <Avatar>{email[0]}</Avatar>
        <UserName>{email}</UserName>
      </User>

      {/* TODO LogOut */}
      {/* <LogOutButton onClick={handleClick}> Sign out</LogOutButton> */}
    </div>
  );
};
