import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../routes";
import { Input } from "../Input/Input";
import { Button, Form, Label } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValuesKeys } from "config/authFormValues";

export type SignUpValues = {
  email: string;
  password: string;
};

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpValues>();

  const onSubmit: SubmitHandler<SignUpValues> = ({ email, password }) => {
    reset();
  };

  return (
    //TODO: сделать авторизацию, сделать большой компонент для label, input
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        Email
        <Input
          type="text"
          register={register}
          label={FormValuesKeys.EMAIL}
          rules={{
            required: true,
          }}
          //TODO: Добавить паттерн для электронной почты
        ></Input>
        {errors.email && <p>{errors.email.message}</p>}
      </Label>
      <Label>
        Password
        <Input
          type="password"
          register={register}
          label={FormValuesKeys.PASSWORD}
          rules={{
            required: true,
            minLength: {
              value: 6,
              message: "Password must be more than 6 characters long",
            },
          }}
        ></Input>
        {errors.password && <p>{errors.password.message}</p>}
      </Label>
      <Button type="submit">Sign up</Button>
      Already have an account?
      <Link to={`/${ROUTE.SIGN_IN}`}>Sign In</Link>
    </Form>
  );
};
