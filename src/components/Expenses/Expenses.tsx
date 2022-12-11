import { ExpensesList } from "components/ExpensesList/ExpensesList";
import { StyledInput } from "components/Input/styles";
import { Title } from "components/Title/Title";
import { ExpensesListContainer, NotFoundTitle, StyledExpenses } from "./styles";
import { useState, useEffect } from "react";
import { useInput } from "hooks";
import { useExpensesContext } from "context";

export const Expenses = () => {
  const search = useInput();
  const { expenses } = useExpensesContext();
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
        <ExpensesListContainer>
          <NotFoundTitle>Oooops 🙈</NotFoundTitle>
        </ExpensesListContainer>
      )}
    </StyledExpenses>
  );
};
