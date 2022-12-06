import { ReactNode } from "react";
import { Currency } from "./config/currency";

export interface ICurrencyContextProvider {
  children: ReactNode;
}

export interface ICurrency {
  label: keyof typeof Currency;
  value: Currency;
}

export interface ICurrencyContext {
  currencies: ICurrency[];
}
