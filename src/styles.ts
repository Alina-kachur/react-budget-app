import styled from "styled-components";

export const StyledApp = styled.div`
  display: flex;
  place-self: center center;
  flex-direction: column;
  gap: 30px;
  min-height: 100vh;
  width: clamp(320px, 100%, 450px);
  background-color: white;
  padding: 40px 20px;
`;
