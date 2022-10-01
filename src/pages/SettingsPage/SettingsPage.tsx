import { ColorMode, Input } from "../../components";
import { Form, Setting, Name, Wrapper, Container } from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelectors";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { updateUserPassword } from "store/features/userSlice";
import { stringify } from "querystring";

export const SettingsPage = () => {
  const { email } = useAppSelector(getUserInfo);
  //TODO: добавить кнопки

  type PasswordValues = {
    newPassword: string;
    currentPassword: string;
    repeatPassword: string;
  };

  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    reset,
    control,
    register,
    formState: { errors },
  } = useForm<PasswordValues>({
    defaultValues: {
      newPassword: "",
      currentPassword: "",
      repeatPassword: "",
    }
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
      ).unwrap().finally(() => {
        console.log("pep");
        reset();
      })
      
    } else {
      console.log(newPassword, repeatPassword);
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
            Current password:
            <Controller
              name={"currentPassword"}
              control={control}
              render={({ field: { onChange, value } }) => {
                return <Input type={"password"} onChange={onChange} value={value} />;
              }}
            />
            New password:
            <Controller
              name={"newPassword"}
              control={control}
              render={({ field: { onChange, value } }) => {
                return <Input type={"password"} onChange={onChange} value={value} />;
              }}
            />
            <Controller
              name={"repeatPassword"}
              control={control}
              render={({ field: { onChange, value } }) => {
                return <Input type={"password"} onChange={onChange} value={value} />;
              }}
            />
            <button type="submit"> submit </button>
          </Form>
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
