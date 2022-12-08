import { ExpensesItem } from "components/ExpensesItem/ExpensesItem";
import { IExpense } from "types/types";
import { StyledExpensesList } from "./styles";

interface IProps {
  expenses: IExpense[];
}

export const ExpensesList = ({ expenses }: IProps) => {
  return (
    <StyledExpensesList>
      {expenses.map((expense) => (
        <ExpensesItem expense={expense} key={expense.id} />
      ))}
    </StyledExpensesList>
  );
};
