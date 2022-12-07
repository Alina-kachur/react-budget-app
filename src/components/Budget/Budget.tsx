import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Title } from "../Title/Title";
import { TotalBudget } from "../TotalBudget/TotalBudget";
import { HeaderBudget, StyledBudget } from "./styles";

export const Budget = () => {
  return (
    <StyledBudget>
      <HeaderBudget>
        <Title> Budget App</Title>
        <CustomSelect />
      </HeaderBudget>
      <TotalBudget></TotalBudget>
    </StyledBudget>
  );
};
