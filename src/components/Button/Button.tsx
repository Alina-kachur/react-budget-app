import { StyledButton } from "./styles";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ children, type }: IProps) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};
