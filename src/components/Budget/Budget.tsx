import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Title } from "../Title/Title";
import { StyledBudget } from "./styles";

export const Budget = () => {
  return (
    <StyledBudget>
      <Title> Budget App</Title>
      <CustomSelect />
    </StyledBudget>
  );
};
