import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes";
import { Button, Form, SignIn, Error, Label, CommonError } from "./styles";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "components";
import { useState } from "react";
import { getFirebaseMessage } from "utils/fireBaseError";

export type SignUpValues = {
  email: string;
  password: string;
};

export enum SignUpValuesKeys {
  EMAIL = "email",
  PASSWORD = "password",
}

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<SignUpValues>();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignUpValues> = ({ email, password }) => {
    setIsLoading(true);
    setErrorMessage(null);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
                label={SignUpValuesKeys.EMAIL}
                onChange={onChange}
                value={value}
                rules={{
                  required: true,
                  pattern: {
                    value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                    message: "Please, enter correct email",
                  },
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
                label={SignUpValuesKeys.PASSWORD}
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
      <Button type="submit">Sign up</Button>
      
      <SignIn>
        Already have an account?
        <Link to={`/${ROUTE.SIGN_IN}`}> Sign in</Link>
        {errorMessage && <CommonError>{errorMessage}</CommonError>}
      </SignIn>
    </Form>
  );
};
