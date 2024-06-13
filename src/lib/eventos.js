import dayjs from "dayjs";

const eventos = [
  {
    id: 1,
    backgroundImage:
      "https://cdn.bitrix24.com.br/b13589949/landing/77f/77f9503f0e1c3c922d71a6806d08b413/Sem-titulo-2_1x.png",
    eventTitle: "Evento Teste",
    eventDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, sapiente.",
    eventDate: dayjs(new Date()).hour(9).minute(10).add(5, "D").toISOString(),
    duration: 30,
  },
  {
    id: 2,
    backgroundImage:
      "https://cdn.bitrix24.com.br/b13589949/landing/77f/77f9503f0e1c3c922d71a6806d08b413/Sem-titulo-2_1x.png",
    eventTitle: "Meeting Teste",
    eventDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, sapiente.",
    eventDate: dayjs(new Date()).hour(9).minute(10).add(5, "D").toISOString(),
    duration: 30,
  },
  {
    id: 3,
    backgroundImage:
      "https://cdn.bitrix24.com.br/b13589949/landing/77f/77f9503f0e1c3c922d71a6806d08b413/Sem-titulo-2_1x.png",
    eventTitle: "Reunião Teste",
    eventDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, sapiente.",
    eventDate: dayjs(new Date()).hour(9).minute(10).add(5, "D").toISOString(),
    duration: 30,
  },
  {
    id: 4,
    backgroundImage:
      "https://cdn.bitrix24.com.br/b13589949/landing/77f/77f9503f0e1c3c922d71a6806d08b413/Sem-titulo-2_1x.png",
    eventTitle: "Evento Teste",
    eventDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, sapiente.",
    eventDate: dayjs(new Date()).hour(9).minute(10).add(5, "D").toISOString(),
    duration: 30,
  },
  {
    id: 5,
    backgroundImage:
      "https://cdn.bitrix24.com.br/b13589949/landing/77f/77f9503f0e1c3c922d71a6806d08b413/Sem-titulo-2_1x.png",
    eventTitle: "Evento Teste",
    eventDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, sapiente.",
    eventDate: dayjs(new Date()).hour(9).minute(10).add(5, "D").toISOString(),
    duration: 30,
  },
];

export { eventos };
