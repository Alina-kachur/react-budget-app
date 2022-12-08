import { StyledInput } from "components/Input/styles";
import styled from "styled-components";

const StyledTotalBudget = styled.div`
  border-radius: 10px;
  padding: 40px 20px;
  background: #7cc6fe;
  display: flex;
  justify-content: space-between;
`;

const TitleBudget = styled.h4`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

const Button = styled.button`
  background: #ffffff;
  border-radius: 10px;
  padding: 10px 30px;
  border: none;

  font-family: sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;

const InputBudget = styled(StyledInput)`
  background-color: #7cc6fe;
  color: rgba(255, 255, 255, 0.6);
  box-shadow: none;
  padding: 8px;
  font-size: 20px;
`;
export { StyledTotalBudget, TitleBudget, Button, InputBudget };
