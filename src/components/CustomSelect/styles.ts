import { StylesConfig } from "react-select";
import { ICurrency } from "types";

export const styles: StylesConfig<ICurrency> = {
  control: (baseStyles) => ({
    ...baseStyles,
    maxHeight: "30px",
    maxWidth: "100px",
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    textAlign: "center",
    fontFamily: "Poppins",
    fontWeight: "400px",
    fontSize: "12px",
    color: "#000000",
  }),
};
