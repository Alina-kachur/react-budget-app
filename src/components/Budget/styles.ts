import styled from "styled-components";

const StyledBudget = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 2fr 2fr;
  grid-gap: 15px;
`;

const HeaderBudget = styled.div`
  display: flex;
  justify-content: space-between;
`;
export { StyledBudget, HeaderBudget };
