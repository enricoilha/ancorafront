import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 6vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px;
`;

export const Logo = styled.p`
  color: white;
  font-weight: 600;
  font-size: 1.3rem;
  letter-spacing: 0.04rem;
`;

export const Button = styled.a`
  color: white;
  cursor: pointer;
  font-size: 1.07rem;
  letter-spacing: 0.033rem;
  transition: 0.2s ease-in-out;

  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonsWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;
