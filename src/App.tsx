import { Budget } from "./components/Budget/Budget";
import { Expenses } from "./components/Expenses/Expenses";
import { GlobalStyle } from "./GlobalStyles";
import { StyledApp } from "./styles";

export const App = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <Budget />
      <Expenses />
    </StyledApp>
  );
};
