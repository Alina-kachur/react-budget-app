import { Form } from "components/Form/Form";
import { Budget } from "./components/Budget/Budget";
import { Expenses } from "./components/Expenses/Expenses";
import { GlobalStyle } from "./ui/GlobalStyles";
import { StyledApp } from "./styles";

export const App = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <Budget />
      <Expenses />
      <Form></Form>
    </StyledApp>
  );
};
