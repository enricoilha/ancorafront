import { useParams } from "react-router-dom";
import { Header } from "../../components/header";
import {
  PageContainer,
  PageTitle,
  PageTitleDescription,
} from "../../components/styled";
import {
  AddParticipantButton,
  EventDate,
  EventDescription,
  EventInfosContainer,
  EventTitle,
  ParticipantContainerTitle,
  ParticipantDeleteButton,
  ParticipantRow,
  ParticipantRowContainer,
  ParticipantsContainer,
  WallpaperImage,
} from "./styled";
import dayjs from "dayjs";
import { Footer } from "../../components/footer";
import { useState } from "react";
import { Modal } from "../../components/modal";
import { NewParticipantForm } from "../../components/newParticipantForm";
import { Trash2 } from "lucide-react";

export const EventPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { id } = useParams();

  const [filteredParticipants, setFilteredParticipants] = useState(
    JSON.parse(window.localStorage.getItem("participants")).filter(
      (participant) => participant.eventId === Number(id)
    )
  );

  const event = JSON.parse(window.localStorage.getItem("events")).find(
    (event) => event.id === Number(id)
  );

  const addParticipant = (newParticipant) => {
    const participantsStorage = JSON.parse(
      window.localStorage.getItem("participants")
    );
    participantsStorage.push(newParticipant);
    window.localStorage.setItem(
      "participants",
      JSON.stringify(participantsStorage)
    );
    const filteredParticipants = participantsStorage.filter(
      (p) => p.eventId === Number(id)
    );

    setFilteredParticipants(filteredParticipants);
  };

  const deleteEvent = (id) => {
    const deleted = filteredParticipants.filter((item) => item.id !== id);

    const participantsStorage = JSON.parse(
      window.localStorage.getItem("participants")
    );
    const indexOfDeleted = participantsStorage.findIndex((p) => p.id === id);
    participantsStorage.splice(indexOfDeleted, 1);
    window.localStorage.setItem(
      "participants",
      JSON.stringify(participantsStorage)
    );
    return setFilteredParticipants(deleted);
  };

  return (
    <>
      <Header />
      <PageContainer>
        <PageTitle>Evento</PageTitle>
        <PageTitleDescription>Sobre o evento</PageTitleDescription>
        <WallpaperImage backgroundImage={event?.backgroundImage} />
        <EventInfosContainer>
          <EventTitle>{event.eventTitle}</EventTitle>
          <EventDescription>{event.eventDescription}</EventDescription>
          <EventDate>
            Data: {dayjs(event.eventDate).format("DD/MM/YYYY")}
          </EventDate>
          <EventDate>Hora: {dayjs(event.eventDate).format("hh:mm")}</EventDate>
        </EventInfosContainer>

        <ParticipantsContainer>
          <ParticipantContainerTitle>
            Participantes ({filteredParticipants.length})
          </ParticipantContainerTitle>

          <ParticipantRowContainer>
            {filteredParticipants.map((item, idx) => (
              <ParticipantRow key={`participantrow-${idx}`}>
                {item.email}
                <ParticipantDeleteButton onClick={() => deleteEvent(item.id)}>
                  <Trash2 size={20} />
                </ParticipantDeleteButton>
              </ParticipantRow>
            ))}
            <AddParticipantButton onClick={() => setModalOpen(true)}>
              Adicionar participante
            </AddParticipantButton>
          </ParticipantRowContainer>
        </ParticipantsContainer>
      </PageContainer>
      <Footer />

      {modalOpen && (
        <Modal>
          <NewParticipantForm
            closeFunction={() => setModalOpen(false)}
            setParticipant={(x) => addParticipant(x)}
            eventId={Number(id)}
          />
        </Modal>
      )}
    </>
  );
};
