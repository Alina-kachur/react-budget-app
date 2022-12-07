import { useCurrencyContext } from "context/CurrencyContext/CurrencyContext";
import { StyledRemainingBudget, TitleRemaining } from "./styles";

export const RemainingBudget = () => {
  const { curentCurrency } = useCurrencyContext();

  return (
    <StyledRemainingBudget>
      <TitleRemaining>Remaining: {curentCurrency.value}</TitleRemaining>
    </StyledRemainingBudget>
  );
};
