import { Portal, PortalTarget } from "components";
import { Container, Title, Button, BlurWrapper } from "./styles";

interface IProps {
  toggleModal: (value: boolean) => void;
}

export const Modal = ({ toggleModal }: IProps) => {
  return (
    <Portal target={PortalTarget.MODAL}>
      <BlurWrapper></BlurWrapper>
      <Container>
        <Title>You successfully authenticated</Title>
        <Button type="button" onClick={() => toggleModal(false)}>
          Got it!
        </Button>
      </Container>
    </Portal>
  );
};
