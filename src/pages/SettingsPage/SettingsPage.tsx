import { ColorMode } from "../../components";
import { Form, Setting, Name, Wrapper } from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelectors";
import { SubmitHandler, useForm } from "react-hook-form";
import { updateUserPassword } from "store/features/userSlice";

export const SettingsPage = () => {
  const { email } = useAppSelector(getUserInfo);
  //TODO: добавить кнопки

  type PasswordValues = {
    password: string;
    currentPassword: string;
  };

  // export const SignInForm = () => {
  //   const { isPendingAuth, error } = useAppSelector(getUserInfo);
  //   const [errorMessage, setErrorMessage] = useState<string | null>(null);
  //   const dispatch = useAppDispatch();
  //   const navigate = useNavigate();

  //   const {
  //     handleSubmit,
  //     formState: { errors },
  //     control,
  //     reset,
  //   } = useForm<SignInValues>({
  //     defaultValues: { email: "", password: "" },
  //   });

  //   const onSubmit: SubmitHandler<SignInValues> = (userInfo) => {
  //     dispatch(fetchSignInUser(userInfo))
  //       .unwrap()
  //       .then(() => {navigate(ROUTE.HOME)})
  //       .finally(() => {
  //         reset();
  //       });
  //   };

  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<PasswordValues>();

  const onSubmit: SubmitHandler<PasswordValues> = (formValues) => {
    dispatch(
      updateUserPassword({
        email: email,
        newPassword: formValues.password,
        currentPassword: formValues.currentPassword,
      }),
    );
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Setting>
        <Name>Profile</Name>
        <Wrapper>
          <p>email: {email}</p>
        </Wrapper>
      </Setting>
      <Setting>
        <Name>Password</Name>
        <Wrapper>
          <input type="password" {...register("currentPassword")}></input>
          <input type="password" {...register("password")}></input>
          <button type="submit"> submit </button>
        </Wrapper>
      </Setting>
      <Setting>
        <Name>ColorMode</Name>
        <Wrapper>
          <ColorMode />
        </Wrapper>
      </Setting>
    </Form>
  );
};
