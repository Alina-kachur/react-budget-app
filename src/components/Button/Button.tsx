import { StyledButton } from "./styles";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  form?: string;
}

export const Button = ({ children, type, form }: IProps) => {
  return (
    <StyledButton type={type} form={form}>
      {children}
    </StyledButton>
  );
};
