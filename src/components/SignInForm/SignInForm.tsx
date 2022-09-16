import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes";
import { Button, Form, SignUp, Error, Label } from "./styles";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "components";
import { useState } from "react";
import { getFirebaseMessage } from "utils/fireBaseError";
import { useDispatch } from "react-redux";
import { signIn } from "store/features/userSlice";

export type SignInValues = {
  email: string;
  password: string;
};

export enum SignInValuesKeys {
  EMAIL = "email",
  PASSWORD = "password",
}

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<SignInValues>();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<SignInValues> = ({ email, password }) => {
    dispatch(signIn());
    setIsLoading(true);
    setErrorMessage(null);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((_) => {
        navigate("/");
      })
      .catch((err) => {
        setErrorMessage(getFirebaseMessage(err.code));
      })
      .finally(() => {
        setIsLoading(false);
      });
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        Email
        <Controller
          name={"email"}
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                type={"text"}
                register={register}
                label={SignInValuesKeys.EMAIL}
                onChange={onChange}
                value={value}
                rules={{
                  required: true,
                }}
              />
            );
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
            return (
              <Input
                type={"password"}
                register={register}
                label={SignInValuesKeys.PASSWORD}
                onChange={onChange}
                value={value}
                rules={{
                  required: true,
                  minLength: {
                    value: 6,
                    message: "Password must be more than 6 characters long",
                  },
                }}
              />
            );
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
