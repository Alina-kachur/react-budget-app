import { CustomSelect } from "components/CustomSelect/CustomSelect";
import { RemainingBudget } from "components/RemainingBudget/RemainingBudget";
import { SpentBudget } from "components/SpentBudget/SpentBudget";
import { Title } from "components/Title/Title";
import { TotalBudget } from "components/TotalBudget/TotalBudget";
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
