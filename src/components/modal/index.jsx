import { ModalBackdrop, ModalContentContainer } from "./styled";

// eslint-disable-next-line react/prop-types
export const Modal = ({ children }) => {
  return (
    <ModalBackdrop>
      <ModalContentContainer>{children}</ModalContentContainer>
    </ModalBackdrop>
  );
};
