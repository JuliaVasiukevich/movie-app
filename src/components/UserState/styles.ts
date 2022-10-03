import styled from "styled-components";
import { Color } from "ui";

// const LogOutButton = styled.button`
//   padding: 16px;
//   background-color: rgba(28, 28, 28, 0);
//   color: ${Color.Secondary};
//   border: none;
// `;

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
  margin-right: 0.3rem;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const UserName = styled.div`
  display: flex;
  
`;

export {  Avatar, User, UserName };
