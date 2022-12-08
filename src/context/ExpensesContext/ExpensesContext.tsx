import { createContext, useContext, useState } from "react";
import { IExpensesContext, IExpensesContextProvider } from "types";

const ExpensesContext = createContext<IExpensesContext>({} as IExpensesContext);

const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpensesContext>(() => ({
    expenses: [],
    addNewExpenses: (newExpense) => {
      setExpensesContext((ctx) => ({ ...ctx, expenses: [...ctx.expenses, newExpense] }));
    },
    deleteExpenses: (id) => {
      setExpensesContext((ctx) => ({
        ...ctx,
        expenses: ctx.expenses.filter((expense) => expense.id !== id),
      }));
    },
  }));
  return expensesContext;
};

export const useExpensesContext = () => useContext<IExpensesContext>(ExpensesContext);

export const ExpensesContextProvider = ({ children }: IExpensesContextProvider) => {
  return (
    <ExpensesContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
