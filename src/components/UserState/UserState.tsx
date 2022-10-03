import { UserIcon } from "assets";
import { Link } from "react-router-dom";
import { ROUTE } from "routes";
import { useAppSelector, getUserInfo } from "store";
import { Avatar, User, UserName } from "./styles";

export const UserState = () => {
  const { isAuth, email } = useAppSelector(getUserInfo);

  return (
    <div>
      {isAuth ? (
        <User>
          <Avatar>{email[0]}</Avatar>
          <UserName>{email}</UserName>
        </User>
      ) : (
        <User>
          <Avatar>
            <UserIcon />
          </Avatar>
          <Link to={ROUTE.SIGN_IN}>Sign in</Link>
        </User>
      )}

      {/* TODO LogOut */}
      {/* <LogOutButton onClick={handleClick}> Sign out</LogOutButton> */}
    </div>
  );
};
