import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes";
import { Button, Form, SignUp, Error, Label } from "./styles";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelectors";
import { fetchSignInUser } from "store/features/userSlice";

export type SignInValues = {
  email: string;
  password: string;
};

export enum SignInValuesKeys {
  EMAIL = "email",
  PASSWORD = "password",
}

export const SignInForm = () => {
  const { isPendingAuth, error } = useAppSelector(getUserInfo);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<SignInValues>({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit: SubmitHandler<SignInValues> = (userInfo) => {
    dispatch(fetchSignInUser(userInfo))
      .unwrap()
      .then(() => {navigate(ROUTE.HOME)})
      .finally(() => {
        reset();
      });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        Email
        <Controller
          name={"email"}
          control={control}
          render={({ field: { onChange, value } }) => {
            return <Input type={"text"} onChange={onChange} value={value} />;
          }}
        />
        {errors.email && <Error>{errors.email.message}</Error>}
      </Label>
      <Label>
        Password
        <Controller
          name={"password"}
          control={control}
          render={({ field: { onChange, value } }) => {
            return <Input type={"password"} onChange={onChange} value={value} />;
          }}
        />
        {errors.password && <Error>{errors.password.message}</Error>}
      </Label>
      <Button type="submit">Sign in</Button>
      {errorMessage && <Error>{errorMessage}</Error>}
      <SignUp>
        Don’t have an account?
        <Link to={`/${ROUTE.SIGN_UP}`}> Sign up</Link>
      </SignUp>
    </Form>
  );
};
