import { StyledBudge } from "./styles";
import { ReactNode } from "react";
import { useCurrencyContext } from "context/CurrencyContext/CurrencyContext";

interface IProps {
  children: ReactNode;
}

export const Badge = ({ children }: IProps) => {
  return <StyledBudge>{children}</StyledBudge>;
};
