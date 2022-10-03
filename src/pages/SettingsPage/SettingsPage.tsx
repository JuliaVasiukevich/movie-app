import { ColorMode, Input, Modal } from "components";
import { Form, Setting, Name, Wrapper, Container, Column, Button, LabelText } from "./styles";
import { useAppDispatch, useAppSelector, getUserInfo, updateUserPassword } from "store";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

export const SettingsPage = () => {
  const { email } = useAppSelector(getUserInfo);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isOpen, toggleModal] = useState(false);

  type PasswordValues = {
    newPassword: string;
    currentPassword: string;
    repeatPassword: string;
  };

  const dispatch = useAppDispatch();

  const { handleSubmit, reset, control } = useForm<PasswordValues>({
    defaultValues: {
      newPassword: "",
      currentPassword: "",
      repeatPassword: "",
    },
  });

  const onSubmit: SubmitHandler<PasswordValues> = ({
    repeatPassword,
    newPassword,
    currentPassword,
  }) => {
    if (newPassword === repeatPassword) {
      dispatch(
        updateUserPassword({
          email: email,
          newPassword: newPassword,
          currentPassword: currentPassword,
        }),
      )
        .unwrap()
        .then(()=> {
          setErrorMessage("Success!");
          toggleModal(true);
        })
        .catch((err) => {
          setErrorMessage(err);
          toggleModal(true);
        })
        .finally(() => {
          reset();
        });
    } else {
      setErrorMessage("Password inputs must be the same!");
      toggleModal(true);
    }
  };

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
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Column>
              <LabelText> Current password:</LabelText>
              <Controller
                name={"currentPassword"}
                control={control}
                render={({ field: { onChange, value } }) => {
                  return <Input type={"password"} onChange={onChange} value={value} />;
                }}
              />
            </Column>
            <Column>
              <LabelText> New password:</LabelText>
              <Controller
                name={"newPassword"}
                control={control}
                render={({ field: { onChange, value } }) => {
                  return <Input type={"password"} onChange={onChange} value={value} />;
                }}
              />
              <LabelText> Repeat password:</LabelText>
              <Controller
                name={"repeatPassword"}
                control={control}
                render={({ field: { onChange, value } }) => {
                  return <Input type={"password"} onChange={onChange} value={value} />;
                }}
              />
              <Button type="submit"> submit </Button>
            </Column>
          </Form>
        </Wrapper>
      </Setting>
      <Setting>
        <Name>ColorMode</Name>
        <Wrapper>
          <ColorMode />
        </Wrapper>
      </Setting>
      {isOpen && <Modal toggleModal={toggleModal} message={errorMessage} />}
    </Container>
  );
};
