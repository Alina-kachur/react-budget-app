import ReactDOM from "react-dom/client";
import { App } from "./App";
import { CurrencyContextProvider } from "./context/CurrencyContext/CurrencyContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <CurrencyContextProvider>
    <App />
  </CurrencyContextProvider>,
);
