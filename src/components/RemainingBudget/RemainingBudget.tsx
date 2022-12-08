import { useBudgetContext } from "context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "context/ExpensesContext/ExpensesContext";
import { StyledRemainingBudget, TitleOverSpending, TitleRemaining } from "./styles";
import { useState, useEffect } from "react";

export const RemainingBudget = () => {
  const { budget } = useBudgetContext();
  const { curentCurrency } = useCurrencyContext();
  const { expenses } = useExpensesContext();
  const [$isOverSpending, setIsOverSpending] = useState(false);

  const spent = expenses.reduce((total, expense) => (total += expense.cost), 0);
  const overSpending = budget - spent;

  useEffect(() => {
    if (overSpending < 0) {
      setIsOverSpending(true);
    } else if (overSpending >= 0) {
      setIsOverSpending(false);
    }
  }, [overSpending]);

  return (
    <StyledRemainingBudget $isOverSpending={$isOverSpending}>
      {$isOverSpending ? (
        <TitleOverSpending>
          Overspending by {curentCurrency.value}
          {Math.abs(overSpending)}
        </TitleOverSpending>
      ) : (
        <TitleRemaining>
          Remaining: {curentCurrency.value} {overSpending}
        </TitleRemaining>
      )}
    </StyledRemainingBudget>
  );
};
