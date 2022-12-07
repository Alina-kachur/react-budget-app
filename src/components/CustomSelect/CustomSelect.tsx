import Select, { SingleValue } from "react-select";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { styles } from "./styles";

export const CustomSelect = () => {
  const { currencies, curentCurrency, setNewCurrency } = useCurrencyContext();
  const handleSelect = (option: SingleValue<typeof curentCurrency>) => {
    if (option) {
      setNewCurrency(option);
    }
  };

  return (
    <Select
      styles={styles}
      isMulti={false}
      options={currencies}
      isSearchable={false}
      value={curentCurrency}
      onChange={handleSelect}
    ></Select>
  );
};
