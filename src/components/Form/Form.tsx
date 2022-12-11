import { Button } from "components/Button/Button";
import { StyledInput } from "components/Input/styles";
import { Title } from "components/Title/Title";
import { useForm, SubmitHandler } from "react-hook-form";
import { StyledForm, SpanErrors } from "./styles";
import { v4 as uuidv4 } from "uuid";
import { useBudgetContext, useExpensesContext } from "context";

interface IFormValues {
  name: string;
  cost: number;
}

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>();
  const { addNewExpenses } = useExpensesContext();
  const { budget } = useBudgetContext();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    const newExpense = {
      name: data.name,
      cost: data.cost,
      id: uuidv4(),
    };
    if (budget) {
      addNewExpenses(newExpense);
      reset();
    } else {
      alert("Enter budget");
    }
  };

  return (
    <StyledForm id="expense-form" onSubmit={handleSubmit(onSubmit)}>
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
      <Button form="expense-form" type="submit">
        Done
      </Button>
    </StyledForm>
  );
};
