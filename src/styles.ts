import styled from "styled-components";

export const StyledApp = styled.div`
  display: flex;
  place-self: center center;
  flex-direction: column;
  gap: 30px;
  width: clamp(320px, 100%, 450px);
  min-height: 100vh;
  padding: 40px 20px;
  background-color: white;
`;
