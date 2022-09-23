import styled from "styled-components";
import { Color } from "ui/colors";

const LogOutButton = styled.button`
  padding: 16px;
  background-color: rgba(28, 28, 28, 0);
  color: ${Color.Secondary};
  border: none;
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  font-size: 20px;
  line-height: 24px;
  background-color: ${Color.Primary};
  color: ${Color.White};
  border-radius: 10px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.div`
  display: flex;
  margin-left: 0.3rem;
`;

export { LogOutButton, Avatar, User, UserName };
