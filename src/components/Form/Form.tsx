import { Button } from "components/Button/Button";
import { StyledInput } from "components/Input/styles";
import { Title } from "components/Title/Title";
import { useExpensesContext } from "context/ExpensesContext/ExpensesContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormValues } from "types";
import { StyledForm, SpanErrors } from "./styles";
import { v4 as uuidv4 } from "uuid";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>();
  const { addNewExpenses } = useExpensesContext();
  const onSubmit: SubmitHandler<IFormValues> = ({ name, cost }) => {
    addNewExpenses({ name, cost, id: uuidv4() });
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title>Add Expense</Title>
      <StyledInput
        {...register("name", {
          required: "Expense name is required",
          maxLength: { value: 15, message: "Max 15 characters" },
          minLength: { value: 3, message: "Min 3 characters" },
        })}
        placeholder="enter name ..."
        type="text"
      />
      {errors.name && <SpanErrors>{errors.name.message}</SpanErrors>}
      <StyledInput
        {...register("cost", {
          required: "Expense cost is required",
          maxLength: { value: 5, message: "Max 5 characters" },
        })}
        placeholder="enter cost ..."
        type="number"
      />
      {errors.cost && <SpanErrors>{errors.cost.message}</SpanErrors>}
      <Button type={"submit"}>Done</Button>
    </StyledForm>
  );
};
