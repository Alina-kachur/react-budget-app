import { StyledButton } from "./styles";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const Button = ({ children }: IProps) => {
  return <StyledButton>{children}</StyledButton>;
};
