import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 20px;
`;

const SpanErrors = styled.span`
  color: red;
`;
export { StyledForm, SpanErrors };
