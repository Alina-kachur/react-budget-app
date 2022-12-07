import { useCurrencyContext } from "context/CurrencyContext/CurrencyContext";
import { StyledSpentBudget, TitleSpent } from "./styles";

export const SpentBudget = () => {
  const { curentCurrency } = useCurrencyContext();

  return (
    <StyledSpentBudget>
      <TitleSpent>Spent so far: {curentCurrency.value}</TitleSpent>
    </StyledSpentBudget>
  );
};
