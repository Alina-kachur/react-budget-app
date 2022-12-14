import { StyledTotalBudget } from "components/TotalBudget/styles";
import styled from "styled-components";

interface IProps {
  $isOverSpending: boolean;
}

const StyledRemainingBudget = styled(StyledTotalBudget)<IProps>`
  background-color: ${({ $isOverSpending }) => ($isOverSpending ? "#FF0000" : "#CCD5FF")};

  transition: 0.5s;
`;

const TitleRemaining = styled.h4`
  font-family: sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

const TitleOverSpending = styled(TitleRemaining)`
  color: #ffffff;
`;
export { StyledRemainingBudget, TitleRemaining, TitleOverSpending };
