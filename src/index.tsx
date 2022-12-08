import { AppContext } from "context/AppContext/AppContext";
import { BudgetContextProvider } from "context/BudgetContext/BudgetContext";
import { ExpensesContextProvider } from "context/ExpensesContext/ExpensesContext";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { CurrencyContextProvider } from "./context/CurrencyContext/CurrencyContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <AppContext
    components={[CurrencyContextProvider, BudgetContextProvider, ExpensesContextProvider]}
  >
    <App />
  </AppContext>,
);
