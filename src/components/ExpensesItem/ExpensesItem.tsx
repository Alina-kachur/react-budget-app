import { Badge } from "components/Badge/Badge";
import { IExpense } from "types/types";
import { ButtonDelete, ExpenseTitle, StyledExpensesItem } from "./styles";
import { ReactComponent as DeleteIcon } from "../../assets/icons/close.svg";
import { useCurrencyContext } from "context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "context/ExpensesContext/ExpensesContext";

interface IProps {
  expense: IExpense;
}

export const ExpensesItem = ({ expense: { name, cost, id } }: IProps) => {
  const { curentCurrency } = useCurrencyContext();
  const { deleteExpenses } = useExpensesContext();
  const handleDelete = () => {
    deleteExpenses(id);
  };

  return (
    <StyledExpensesItem>
      <ExpenseTitle>{name}</ExpenseTitle>
      <Badge>
        <>
          {curentCurrency}
          {cost}
        </>
      </Badge>
      <ButtonDelete onClick={handleDelete}>
        <DeleteIcon />
      </ButtonDelete>
    </StyledExpensesItem>
  );
};
