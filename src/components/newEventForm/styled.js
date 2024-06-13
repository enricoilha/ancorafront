import styled from "styled-components";

export const FormContainer = styled.form`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FormHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const FormHeaderTitle = styled.p`
  font-weight: 500;
  font-size: 1.2rem;
`;

export const FormHeaderDescription = styled.p`
  margin: 5px 0px;
  color: #6b7280;
  font-weight: 300;
`;

export const FormButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;
  margin-top: 10px;
`;

export const CancelButton = styled.button`
  height: 2.4rem;
  padding: 0px 20px;
  font-weight: 400;
  background-color: white;
  transition: 0.2s ease-in-out;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #f4f4f4;
  }
`;

export const SubmitButton = styled.button`
  height: 2.4rem;
  padding: 0px 20px;
  font-weight: 400;
  background-color: #1d3557;
  transition: 0.2s ease-in-out;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: white;

  &:hover {
    background-color: #e63946;
  }
`;
