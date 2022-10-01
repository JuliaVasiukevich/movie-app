import { StylesConfig } from "react-select";
import styled from "styled-components";
import { Color, H3 } from "ui";

const Title = styled(H3)`
color: ${Color.White};
margin-bottom: 20px;
`;

const LabelText = styled.div`
margin-bottom: 10px;
`;

const Form = styled.form`
  position: sticky;
  top: 100px;
  right: 0;
  width: 200px;
  padding-left: 40px;
  padding-top: 0px;
   display: flex;
  flex-direction: column;
  padding: 40px;
  width: 320px;
`;

const Button = styled.button`
  width: 100%;
  padding: 16px;
  margin-top: 20px;
  margin-bottom: 32px;
  background-color: ${Color.Primary};
  color: ${Color.White};
  border: none;
  border-radius: 10px;
`;

export const customStyles: any = {
  control: () => ({
    width: "100%",
    display: "flex",
    background: Color.Background_primary_dark,
    color: Color.White,
    borderRadius: "10px",
    marginBottom: "45px",
    padding: "7px",
    textAlign: "center",
  }),

  indicatorSeparator: () => ({
    width: 0,
  }),

  menuList: () => ({
    padding: "7px",
    background: Color.Background_primary_dark,
  }),

};

const SignUp = styled.div`
  text-align: center;
`;
const Label = styled.label`
  margin-bottom: 20px;
`;

const Error = styled.p`
  color: ${Color.Error};
`;

export {
  Form, Button, Title, Label, SignUp, Error, LabelText
};
