import { ReactNode } from "react";
import { Currency } from "../config/currency";

interface ICurrency {
  label: keyof typeof Currency;
  value: Currency;
}
interface ICurrencyContext {
  currencies: ICurrency[];
  curentCurrency: ICurrency;
  setNewCurrency: (option: ICurrency) => void;
}
interface IContextProvider {
  children: ReactNode;
}
interface IBudgetContext {
  budget: number;
  setNewBudget: (newBudget: number) => void;
}

interface IExpense {
  name: string;
  cost: number;
  id: string;
}
interface IExpensesContext {
  expenses: IExpense[];
  addNewExpenses: (newExpense: IExpense) => void;
  deleteExpenses: (id: string) => void;
}

export {
  type ICurrency,
  type ICurrencyContext,
  type IBudgetContext,
  type IExpense,
  type IExpensesContext,
  type IContextProvider,
};
