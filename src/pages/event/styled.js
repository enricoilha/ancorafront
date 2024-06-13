import styled from "styled-components";

export const WallpaperImage = styled.div`
  width: 100%;
  height: 20rem;
  border-radius: 10px;
  margin-top: 40px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) =>
    props.backgroundImage
      ? props.backgroundImage
      : "https://cdn.bitrix24.com.br/b13589949/landing/77f/77f9503f0e1c3c922d71a6806d08b413/Sem-titulo-2_1x.png"});
`;

export const EventInfosContainer = styled.div`
  margin: 20px 0px;
`;

export const EventTitle = styled.p`
  font-weight: 500;
  font-size: 1.3rem;
`;

export const EventDescription = styled.p`
  font-weight: 400;
  font-size: 0.95rem;
  margin-top: 10px;
  color: #6b7280;
`;

export const EventDate = styled.p`
  font-weight: 400;
  font-size: 0.95rem;
  margin-top: 10px;
`;

export const ParticipantsContainer = styled.div`
  margin-top: 40px;
`;

export const ParticipantContainerTitle = styled.p`
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const AddParticipantButton = styled.button`
  width: 100%;
  border: none;
  background-color: gray;
  color: white;
  border-radius: 9px;
  font-size: 1rem;
  cursor: pointer;
  padding: 16px;
  transition: 0.4s ease-in-out;

  &:hover {
    background-color: black;
  }
`;

export const ParticipantRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const ParticipantRow = styled.div`
  width: 100%;
  height: 2.8rem;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
`;

export const ParticipantDeleteButton = styled.button`
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #e63946;
  background-color: inherit;
  border: none;
  transition: 0.2s ease-in-out;
  border-radius: 3px;

  &:hover {
    background-color: #e639462f;
  }
`;
