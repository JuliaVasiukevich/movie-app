import React from "react";
import { Link, Route } from "react-router-dom";
import { Input } from "../../components";
import { ROUTE } from "../../routes";
import { Button, Form, Wrapper } from "./styles";

export const SignInPage = () => {
  return (
    <>
      <Wrapper>
        <Form>
          <Input></Input>
          <Input></Input>
          <Button type="submit">Sign in</Button>
          Don’t have an account?
          <Link to={`/${ROUTE.SIGN_UP}`}>Sign Up</Link>
        </Form>
      </Wrapper>
    </>
  );
};
