import { ColorMode, ResetPasswordForm } from "components";
import { Setting, Name, Wrapper, Container } from "./styles";
import { useAppSelector, getUserInfo } from "store";

export const SettingsPage = () => {
  const { email } = useAppSelector(getUserInfo);

  return (
    <Container>
      <Setting>
        <Name>Profile</Name>
        <Wrapper>
          <p>email: {email}</p>
        </Wrapper>
      </Setting>
      <Setting>
        <Name>Password</Name>
        <Wrapper>
          <ResetPasswordForm />
        </Wrapper>
      </Setting>
      <Setting>
        <Name>ColorMode</Name>
        <Wrapper>
          <ColorMode />
        </Wrapper>
      </Setting>
    </Container>
  );
};
