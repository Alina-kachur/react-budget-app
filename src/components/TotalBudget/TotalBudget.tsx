import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { StyledTotalBudget, TitleBudget } from "./styles";

export const TotalBudget = () => {
  const { curentCurrency } = useCurrencyContext();
  return (
    <StyledTotalBudget>
      <TitleBudget>Budget: {curentCurrency.value}</TitleBudget>
    </StyledTotalBudget>
  );
};
