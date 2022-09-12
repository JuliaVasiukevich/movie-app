import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../routes";
import { Input } from "../Input/Input";
import { Button, Form, Label } from "./styles";

export const SignInForm = () => {
  return (
    <Form>
      <Label>
        Email
        <Input></Input>
      </Label>
      <Label>
        Password
        <Input></Input>
      </Label>
      <Button type="submit">Sign in</Button>
      Don’t have an account?
      <Link to={`/${ROUTE.SIGN_UP}`} type="submit">
        Sign Up
      </Link>
    </Form>
  );
};
