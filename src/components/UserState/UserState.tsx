import { useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelectors";
import { LogOutButton } from "./styles";

export const UserState = () => {

  const handleClick = () => {
  };
  const { email } = useAppSelector(getUserInfo);

  return (
    <div>
      Hi, {email}
      <LogOutButton onClick={handleClick}> Sign out</LogOutButton>
    </div>
  );
};
