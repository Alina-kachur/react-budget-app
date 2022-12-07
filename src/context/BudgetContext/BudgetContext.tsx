import { createContext, useContext, useState } from "react";
import { IBudgetContext, IBudgetContextProvider } from "types";

const BudgetContext = createContext<IBudgetContext>({} as IBudgetContext);

const useBudgetContextValue = () => {
  const [budgetContext, setBudgetContext] = useState<IBudgetContext>(() => ({
    budget: 0,
    setNewBudget: (budget) => {
      setBudgetContext((ctx) => ({ ...ctx, budget }));
    },
  }));
  return budgetContext;
};

export const useBudgetContext = () => useContext<IBudgetContext>(BudgetContext);

export const BudgetContextProvider = ({ children }: IBudgetContextProvider) => {
  return (
    <BudgetContext.Provider value={useBudgetContextValue()}>{children}</BudgetContext.Provider>
  );
};
