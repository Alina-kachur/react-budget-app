import { useCurrencyContext, useExpensesContext } from "context";
import { StyledSpentBudget, TitleSpent } from "./styles";

export const SpentBudget = () => {
  const { curentCurrency } = useCurrencyContext();
  const { expenses } = useExpensesContext();

  const spent = expenses.reduce((total, expense) => (total += expense.cost), 0);

  return (
    <StyledSpentBudget>
      <TitleSpent>
        Spent so far: {curentCurrency.value} {spent}
      </TitleSpent>
    </StyledSpentBudget>
  );
};
