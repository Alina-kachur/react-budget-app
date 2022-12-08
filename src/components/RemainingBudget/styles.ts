import { StyledTotalBudget } from "components/TotalBudget/styles";
import styled from "styled-components";

interface IProps {
  $isOverSpending: boolean;
}

const StyledRemainingBudget = styled(StyledTotalBudget)<IProps>`
  background-color: ${({ $isOverSpending }) => ($isOverSpending ? "#FF0000" : "#CCD5FF")};
`;

const TitleRemaining = styled.h4`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

const TitleOverSpending = styled(TitleRemaining)``;
export { StyledRemainingBudget, TitleRemaining, TitleOverSpending };
