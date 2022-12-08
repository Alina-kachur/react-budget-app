import { useBudgetContext } from "context/BudgetContext/BudgetContext";
import { useInput } from "hooks/useInput";
import { useState } from "react";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { StyledTotalBudget, TitleBudget, Button, InputBudget } from "./styles";

export const TotalBudget = () => {
  const curentBudget = useInput();
  const [isEditBudget, setIsEditBudget] = useState(true);
  const { curentCurrency } = useCurrencyContext();
  const { budget, setNewBudget } = useBudgetContext();

  const handleEditBudget = () => {
    setIsEditBudget(!isEditBudget);
    setNewBudget(+curentBudget.value);
  };

  return (
    <StyledTotalBudget>
      {isEditBudget ? (
        <>
          <TitleBudget>
            Budget: {curentCurrency.value}
            {budget}
          </TitleBudget>
          <Button onClick={handleEditBudget}>Edit</Button>
        </>
      ) : (
        <>
          <InputBudget placeholder="Enter budget..." type="number" {...curentBudget} />
          <Button onClick={handleEditBudget}>Save</Button>
        </>
      )}
    </StyledTotalBudget>
  );
};
