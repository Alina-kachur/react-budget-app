import styled from "styled-components";

const StyledInput = styled.input`
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
  padding: 15px 20px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #999999;

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    display: none;
  }
`;
export { StyledInput };
