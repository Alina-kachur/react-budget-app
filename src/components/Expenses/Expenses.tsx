import { StyledInput } from "components/Input/styles";
import { Title } from "components/Title/Title";
import { useExpensesContext } from "context/ExpensesContext/ExpensesContext";
import { StyledExpenses } from "./styles";

export const Expenses = () => {
  const { expenses, addNewExpenses, deleteExpenses } = useExpensesContext();

  return (
    <StyledExpenses>
      <Title>Expenses</Title>
      <StyledInput placeholder="search ..." />
    </StyledExpenses>
  );
};
