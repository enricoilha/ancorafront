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
import { InputForm } from "../newEventForm/input";

const FormSchema = y.object({
  email: y
    .string()
    .email("Insira um email válido")
    .required("Campo obrigatório"),
});

export const NewParticipantForm = ({
  setParticipant,
  closeFunction,
  eventId,
}) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ resolver: yupResolver(FormSchema) });

  const onSubmit = (fields) => {
    const participants = JSON.parse(
      window.localStorage.getItem("participants")
    );
    setParticipant({
      email: fields.email,
      eventId,
      id: participants[participants.length - 1].id + 1,
    });
    return closeFunction();
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormHeaderContainer>
        <FormHeaderTitle>Adicione um novo participante</FormHeaderTitle>
        <FormHeaderDescription>
          Adicione um novo participante para o evento
        </FormHeaderDescription>
      </FormHeaderContainer>
      <InputForm
        type={"text"}
        title={"Email"}
        register={{ ...register("email") }}
        error={errors.email}
      />

      <FormButtonsContainer>
        <CancelButton onClick={closeFunction}>Cancelar</CancelButton>
        <SubmitButton type="submit">Adicionar Participante</SubmitButton>
      </FormButtonsContainer>
    </FormContainer>
  );
};
