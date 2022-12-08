import { StyledInput } from "./styles";
import { ChangeEvent } from "react";
interface IProps {
  placeholder: string;

  type?: string;
  value: string;
}

export const Input = ({ placeholder, type, value }: IProps) => {
  return <StyledInput placeholder={placeholder} type={type} value={value}></StyledInput>;
};
