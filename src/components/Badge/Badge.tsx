import { StyledBadge } from "./styles";
import { ReactNode } from "react";
import { useCurrencyContext } from "context";

interface IProps {
  children: ReactNode[];
}

export const Badge = ({ children }: IProps) => {
  return (
    <StyledBadge>
      <>{children}</>
    </StyledBadge>
  );
};
