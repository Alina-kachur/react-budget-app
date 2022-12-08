import { StyledInput } from "components/Input/styles";
import styled from "styled-components";

const StyledTotalBudget = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 20px;
  background: #7cc6fe;
  border-radius: 10px;
`;

const TitleBudget = styled.h4`
  font-family: sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

const Button = styled.button`
  padding: 10px 30px;
  background: #ffffff;
  border-radius: 10px;
  border: none;
  font-family: sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;

const InputBudget = styled(StyledInput)`
  padding: 8px;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.6);
  background-color: #7cc6fe;
  box-shadow: none;
`;
export { StyledTotalBudget, TitleBudget, Button, InputBudget };
