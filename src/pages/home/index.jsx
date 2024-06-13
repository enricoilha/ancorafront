import { useEffect, useState } from "react";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import {
  PageContainer,
  PageTitle,
  PageTitleDescription,
} from "../../components/styled";
import {
  EventContainer,
  EventDateTime,
  EventDescription,
  EventImage,
  EventTitle,
  EventsContainer,
  NewEventButton,
  SearchInput,
  UtilityButtonsContainer,
} from "./styled";
import dayjs from "dayjs";
import { Modal } from "../../components/modal";
import { NewEventForm } from "../../components/newEventForm";
import Fuse from "fuse.js";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [eventos, setEventos] = useState(
    JSON.parse(window.localStorage.getItem("events"))
  );
  const [searchInputText, setSearchInputText] = useState(undefined);
  const [fuzzyList, setFuzzyList] = useState(eventos);

  const navigate = useNavigate();

  useEffect(() => {
    window.localStorage.setItem("events", JSON.stringify(eventos));
  }, [eventos]);

  useEffect(() => {
    const options = {
      incluseStore: true,
      keys: ["eventTitle"],
      threshold: 0.4,
    };
    const fuse = new Fuse(eventos, options);
    if (searchInputText) {
      const result = fuse.search(searchInputText);
      const newArr = [];
      result.map((item) => newArr.push(item.item));
      setFuzzyList(newArr);
      return;
    }

    setFuzzyList(eventos);
  }, [searchInputText, eventos]);

  return (
    <>
      <Header />
      <PageContainer>
        <PageTitle>Próximos Eventos</PageTitle>
        <PageTitleDescription>
          Explore os eventos da plataforma
        </PageTitleDescription>
        <UtilityButtonsContainer>
          <SearchInput
            onChange={(e) => setSearchInputText(e.target.value)}
            type="text"
            placeholder="Procure um evento..."
          />
          <NewEventButton onClick={() => setModalOpen(true)}>
            Novo evento
          </NewEventButton>
        </UtilityButtonsContainer>

        <EventsContainer>
          {fuzzyList?.map((item, index) => (
            <EventContainer
              onClick={() => navigate(`/event/${item.id}`)}
              key={`eventoKey-${index}`}
            >
              <EventImage backgroundImage={item.backgroundImage} />
              <EventTitle>{item.eventTitle}</EventTitle>
              <EventDescription>{item.eventDescription}</EventDescription>
              <EventDateTime>
                {dayjs(item.eventDate).format("DD/MM")}{" "}
                {dayjs(item.eventDate).format("hh:mm")} -{" "}
                {dayjs(item.eventDate).add(item.duration, "m").format("hh:mm")}
              </EventDateTime>
            </EventContainer>
          ))}
        </EventsContainer>
      </PageContainer>
      <Footer />

      {modalOpen && (
        <Modal>
          <NewEventForm
            closeFunction={() => setModalOpen(false)}
            setEventos={(x) => setEventos((state) => [...state, x])}
          />
        </Modal>
      )}
    </>
  );
};
