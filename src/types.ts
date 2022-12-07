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

export {
  type ICurrencyContextProvider,
  type ICurrency,
  type ICurrencyContext,
  type IFormValues,
  type IBudgetContext,
  type IBudgetContextProvider,
};
