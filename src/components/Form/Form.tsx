import { Button } from "components/Button/Button";
import { StyledInput } from "components/Input/styles";
import { Title } from "components/Title/Title";
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormValues } from "types";
import { StyledForm, SpanErrors } from "./styles";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = ({ name, cost }) => {
    console.log(name, cost);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title>Add Expense</Title>
      <StyledInput
        {...register("name", {
          required: "Expense name is required",
          maxLength: { value: 20, message: "Max 20 characters" },
          minLength: { value: 3, message: "Min 3 characters" },
        })}
        placeholder="enter name ..."
        type="text"
      />
      {errors.name && <SpanErrors>{errors.name.message}</SpanErrors>}
      <StyledInput
        {...register("cost", {
          required: "Expense cost is required",
          maxLength: { value: 7, message: "Max 7 characters" },
        })}
        placeholder="enter cost ..."
        type="number"
      />
      {errors.cost && <SpanErrors>{errors.cost.message}</SpanErrors>}
      <Button>Done</Button>
    </StyledForm>
  );
};
