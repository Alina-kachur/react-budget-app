import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { StyledTotalBudget } from "./styles";

export const TotalBudget = () => {
  const { curentCurrency } = useCurrencyContext();
  return <StyledTotalBudget>{curentCurrency.value}300</StyledTotalBudget>;
};
