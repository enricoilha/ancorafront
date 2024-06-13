import styled from "styled-components";

export const UtilityButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const SearchInput = styled.input`
  margin-top: 20px;
  width: 20rem;
  height: 2.8rem;
  display: flex;
  align-items: center;
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

export const NewEventButton = styled.button`
  background-color: black;
  height: 2.8rem;
  padding: 0px 16px;
  border-radius: 6px;
  border: none;
  color: white;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #242424;
  }
`;

export const EventsContainer = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  margin: 70px auto 0px auto;
  border-radius: 12px;
`;

export const EventContainer = styled.div`
  width: 20rem;
  height: 17rem;
  border-radius: 8px;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  border: 0.5px solid transparent;

  &:hover {
    box-shadow: 10px 28px 68px -50px rgb(199, 199, 199);
    border: 0.5px solid rgb(199, 199, 199);
  }
`;

export const EventImage = styled.div`
  width: 100%;
  height: 60%;
  border-radius: 8px;
  background-image: url(${(props) =>
    props.backgroundImage
      ? props.backgroundImage
      : "https://cdn.bitrix24.com.br/b13589949/landing/77f/77f9503f0e1c3c922d71a6806d08b413/Sem-titulo-2_1x.png"});
  background-size: cover;
  background-position: center;
`;

export const EventTitle = styled.div`
  color: black;
  font-weight: 400;
  font-size: 1.2rem;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const EventDescription = styled.p`
  width: 15rem;
  color: #6b7280;
  font-weight: 300;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const EventDateTime = styled.p`
  color: #6b7280;
  font-weight: 500;
  margin-top: 10px;
  font-size: 0.88rem;
`;
