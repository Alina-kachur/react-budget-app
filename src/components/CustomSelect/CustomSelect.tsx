import Select from "react-select";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";

export const CustomSelect = () => {
  const { currencies, curentCurrency } = useCurrencyContext();
  return <Select options={currencies} isSearchable={false} value={curentCurrency}></Select>;
};
