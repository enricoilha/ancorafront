import { Input, InputError, InputTitle } from "./styled";

export const InputForm = ({ type, title, register, error }) => {
  return (
    <div>
      <InputTitle>{title}</InputTitle>
      {type !== "datetime-local" ? (
        <Input {...register} type={type} />
      ) : (
        <input {...register} type="datetime-local" />
      )}
      {error?.message && <InputError>{error?.message}</InputError>}
    </div>
  );
};
