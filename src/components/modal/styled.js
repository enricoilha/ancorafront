import styled from "styled-components";

export const ModalBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;

export const ModalContentContainer = styled.div`
  padding: 20px;
  border-radius: 8px;
  background-color: white;
  border: 0.5px solid rgb(199, 199, 199);
`;
