import { ExpensesItem } from "components/ExpensesItem/ExpensesItem";
import { useExpensesContext } from "context/ExpensesContext/ExpensesContext";
import { IExpense } from "types";
import { StyledExpensesList } from "./styles";

interface IProps {
  expenses: IExpense[];
}

export const ExpensesList = ({ expenses }: IProps) => {
  const { deleteExpenses } = useExpensesContext();

  return (
    <StyledExpensesList>
      {expenses.map((expense) => (
        <ExpensesItem
          expense={expense}
          key={expense.id}
          onClick={() => deleteExpenses(expense.id)}
        />
      ))}
    </StyledExpensesList>
  );
};
