import styled from "styled-components";

const StyledExpensesItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 0;
  border-bottom: 2px solid #ccd5ff;
`;

const ExpenseTitle = styled.h5`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;

const ButtonDelete = styled.button`
  background-color: white;
  border: none;
`;
export { StyledExpensesItem, ExpenseTitle, ButtonDelete };
