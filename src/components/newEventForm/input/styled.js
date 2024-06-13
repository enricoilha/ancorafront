import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  transition: 0.05s ease-in-out;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  padding: 10px;
  outline: none;
  &:focus {
    outline: 1px solid #6b7280;
    outline-offset: 1px;
  }
`;

export const InputTitle = styled.p`
  font-weight: 500;
  margin-bottom: 10px;
  font-size: 0.88rem;
`;

export const InputError = styled.p`
  color: #e63946;
  margin-top: 6px;
`;
