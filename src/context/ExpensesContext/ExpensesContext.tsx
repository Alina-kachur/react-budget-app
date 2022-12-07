import { createContext, useContext, useState } from "react";
import { IExpense, IExpensesContext, IExpensesContextProvider } from "types";
import { v4 as uuidv4 } from "uuid";

const ExpensesContext = createContext<IExpensesContext>({} as IExpensesContext);

const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpensesContext>(() => ({
    expenses: [
      // {
      //   name: "drinking",
      //   cost: 200,
      //   id: uuidv4(),
      // },
    ],
    setNewExpenses: (newExpense) => {
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
