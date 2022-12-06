import Select, { SingleValue } from "react-select";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";

export const CustomSelect = () => {
  const { currencies, curentCurrency, setNewCurrency } = useCurrencyContext();
  const handleSelect = (option: SingleValue<typeof curentCurrency>) => {
    if (option) {
      setNewCurrency(option);
    }
  };

  return (
    <Select
      options={currencies}
      isSearchable={false}
      value={curentCurrency}
      onChange={handleSelect}
    ></Select>
  );
};
