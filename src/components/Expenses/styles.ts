import styled from "styled-components";

const StyledExpenses = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const ExpensesListContainer = styled.div`
  height: 200px;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

const NotFoundTitle = styled.h4`
  padding: 40px 0;
  text-align: center;
`;
export { StyledExpenses, NotFoundTitle, ExpensesListContainer };
