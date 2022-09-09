import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../routes";
import { Input } from "../Input/Input";
import { Button, Form, Label } from "./styles";

export const SignUpForm = () => {
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
      <Button type="submit">Sign up</Button>
      Already have an account?
      <Link to={`/${ROUTE.SIGN_IN}`}>Sign In</Link>
    </Form>
  );
};
