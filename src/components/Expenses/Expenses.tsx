import { ExpensesList } from "components/ExpensesList/ExpensesList";
import { StyledInput } from "components/Input/styles";
import { Title } from "components/Title/Title";
import { useExpensesContext } from "context/ExpensesContext/ExpensesContext";
import { useInput } from "hooks/useInput";
import { NotFoundTitle, StyledExpenses } from "./styles";
import { useState, useEffect } from "react";
import { IExpense, IExpensesContext } from "types";

export const Expenses = () => {
  const search = useInput();
  const { expenses, addNewExpenses, deleteExpenses } = useExpensesContext();
  const [filteredExpense, setFilteredExpense] = useState(expenses);

  useEffect(() => {
    setFilteredExpense(
      expenses.filter((expense) =>
        expense.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()),
      ),
    );
  }, [search.value, expenses]);

  return (
    <StyledExpenses>
      <Title>Expenses</Title>
      <StyledInput placeholder="search ..." {...search} />
      {expenses.length ? (
        <ExpensesList expenses={filteredExpense} />
      ) : (
        <NotFoundTitle>Oooops 🙈</NotFoundTitle>
      )}
    </StyledExpenses>
  );
};
