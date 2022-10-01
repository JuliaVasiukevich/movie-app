import { useState } from "react";
import { SignUpForm, Modal } from "../../components";
import { Wrapper } from "./styles";

export const SignUpPage = () => {
  const [isOpen, toggleModal] = useState(false);
  return (
    <Wrapper>
      <SignUpForm toggleModal={toggleModal}/>
      {isOpen && <Modal toggleModal={toggleModal} />}
    </Wrapper>
  );
};
