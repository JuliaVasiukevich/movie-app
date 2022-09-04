import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components";
import { ROUTE } from "../../routes";
import { Button, Form, Wrapper } from "./styles";

export const SignUpPage = () => {
  return (
    <Wrapper>
      <Form>
        <Input></Input>
        <Input></Input>
        <Button type="submit">Sign in</Button>
        Already have an account?
        <Link to={`/${ROUTE.SIGN_IN}`}>Sign In</Link>
      </Form>
    </Wrapper>
  );
};
