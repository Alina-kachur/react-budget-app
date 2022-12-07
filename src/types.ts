import { ReactNode } from "react";
import { Currency } from "./config/currency";

interface ICurrencyContextProvider {
  children: ReactNode;
}

interface ICurrency {
  label: keyof typeof Currency;
  value: Currency;
}
interface ICurrencyContext {
  currencies: ICurrency[];
  curentCurrency: ICurrency;
  setNewCurrency: (option: ICurrency) => void;
}
interface IFormValues {
  name: string;
  cost: number;
}
interface IBudgetContext {
  budget: number;
  setNewBudget: (newBudget: number) => void;
}
interface IBudgetContextProvider {
  children: ReactNode;
}
interface IExpense {
  name: string;
  cost: number;
  id: string;
}
interface IExpensesContext {
  expenses: IExpense[];
  setNewExpenses: (newExpense: IExpense) => void;
  deleteExpenses: (id: string) => void;
}
interface IExpensesContextProvider {
  children: ReactNode;
}

export {
  type ICurrencyContextProvider,
  type ICurrency,
  type ICurrencyContext,
  type IFormValues,
  type IBudgetContext,
  type IBudgetContextProvider,
  type IExpense,
  type IExpensesContext,
  type IExpensesContextProvider,
};
