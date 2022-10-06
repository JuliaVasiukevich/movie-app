import styled from "styled-components";
import { Color, H3, Screen } from "ui";

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
  padding-inline: 40px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  width: 320px;
  height: calc(100vh - 155px);

  ${Screen.MD} {
   position: fixed;
   background-color: ${Color.Background_primary};
   height: calc(100vh - 120px);
  };
`;

const Button = styled.button`
  width: 100%;
  padding: 16px;
  margin-block: 20px;
  background-color: ${Color.Primary};
  color: ${Color.White};
  border: none;
  border-radius: 10px;
  cursor: pointer;

  :hover{
    filter: grayscale(0.75);
  }
`;

const DeleteButton = styled(Button)`
  background-color: ${Color.Graphite};
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
    cursor: "pointer",
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
  Form, Button, DeleteButton, Title, Label, SignUp, Error, LabelText
};
