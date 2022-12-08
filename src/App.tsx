import { Form } from "components/Form/Form";
import { GlobalStyle } from "ui";
import { Budget } from "./components/Budget/Budget";
import { Expenses } from "./components/Expenses/Expenses";
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
