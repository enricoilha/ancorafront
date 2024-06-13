import * as y from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  CancelButton,
  FormButtonsContainer,
  FormContainer,
  FormHeaderContainer,
  FormHeaderDescription,
  FormHeaderTitle,
  SubmitButton,
} from "./styled";
import { InputForm } from "./input";
import dayjs from "dayjs";

const FormSchema = y.object({
  eventTitle: y.string().required("Campo obrigatório"),
  eventDescription: y.string().required("Campo obrigatório"),
  eventDate: y
    .date()
    .typeError("Campo obrigatório")
    .required("Campo obrigatório"),
  duration: y
    .number()
    .required("Campo obrigatório")
    .typeError("Campo obrigatório"),
  backgroundImage: y.string(),
});

export const NewEventForm = ({ setEventos, closeFunction }) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ resolver: yupResolver(FormSchema) });

  console.log(errors);

  const onSubmit = (fields) => {
    const events = JSON.parse(window.localStorage.getItem("events"));
    setEventos({
      ...fields,
      eventDate: dayjs(fields.eventDate).toISOString(),
      id: events[events.length - 1].id + 1,
    });
    return console.log(fields);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormHeaderContainer>
        <FormHeaderTitle>Crie um novo evento</FormHeaderTitle>
        <FormHeaderDescription>
          Adicione um novo evento na plataforma
        </FormHeaderDescription>
      </FormHeaderContainer>
      <InputForm
        type={"text"}
        title={"Título"}
        register={{ ...register("eventTitle") }}
        error={errors.eventTitle}
      />
      <InputForm
        type={"text"}
        title={"Descrição"}
        register={{ ...register("eventDescription") }}
        error={errors.eventDescription}
      />
      <InputForm
        type={"datetime-local"}
        title={"Data e Hora"}
        register={{
          ...register("eventDate"),
        }}
        error={errors.eventDate}
      />
      <InputForm
        type={"number"}
        title={"Duração em minutos"}
        register={{ ...register("duration", { valueAsNumber: true }) }}
        error={errors.duration}
      />
      <InputForm
        type={"text"}
        title={"Link da imagem de fundo"}
        register={{ ...register("backgroundImage") }}
      />

      <FormButtonsContainer>
        <CancelButton onClick={closeFunction}>Cancelar</CancelButton>
        <SubmitButton type="submit">Criar Evento</SubmitButton>
      </FormButtonsContainer>
    </FormContainer>
  );
};
