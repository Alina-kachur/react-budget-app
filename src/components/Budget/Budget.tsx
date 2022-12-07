import { RemainingBudget } from "components/RemainingBudget/RemainingBudget";
import { SpentBudget } from "components/SpentBudget/SpentBudget";
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
      <RemainingBudget />
      <SpentBudget />
    </StyledBudget>
  );
};
