import { StyledTitle } from "./styles";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const Title = ({ children }: IProps) => {
  return <StyledTitle>{children}</StyledTitle>;
};
