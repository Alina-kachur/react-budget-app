import { StyledBudge } from "./styles";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const Badge = ({ children }: IProps) => {
  return <StyledBudge>{children}</StyledBudge>;
};
