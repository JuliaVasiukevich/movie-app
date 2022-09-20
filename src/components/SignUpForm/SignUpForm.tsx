import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes";
import { Button, Form, SignIn, Error, Label, CommonError } from "./styles";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "components";
import { useState } from "react";
import { getFirebaseMessage } from "utils/fireBaseError";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelectors";
import { fetchSignUpUser } from "store/features/userSlice";

export type SignUpValues = {
  email: string;
  password: string;
};

export enum SignUpValuesKeys {
  EMAIL = "email",
  PASSWORD = "password",
}

const validateRules = {
  password: {
    requared: "Password is requared !",
    minLength: {
      value: 6,
      message: "Password must be at least 6 characters",
    },
    maxLength: {
      value: 20,
      message: "Password must be at most 20 characters",
    },
  },
  email: {
    requared: "Email is requared !",
    pattern: {
      value: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      message: "Please enter a valid email",
    },
  },
};

export const SignUpForm = () => {
  const { isPendingAuth, error } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<SignUpValues>({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit: SubmitHandler<SignUpValues> = (userInfo) => {
    dispatch(fetchSignUpUser(userInfo))
      .then(() => {
        
      })
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
          rules={validateRules.email}
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
          rules={validateRules.password}
          render={({ field: { onChange, value } }) => {
            return <Input value={value} onChange={onChange} type="password" />;
          }}
        />
        {errors.password && <Error>{errors.password.message}</Error>}
      </Label>
      <Button type="submit">Sign up</Button>

      <SignIn>
        Already have an account?
        <Link to={`/${ROUTE.SIGN_IN}`}> Sign in</Link>
        {/* {errorMessage && <CommonError>{errorMessage}</CommonError>} */}
      </SignIn>
    </Form>
  );
};
