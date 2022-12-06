import { createGlobalStyle } from "styled-components";
// import url ('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap');

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
}
ol, ul {
  list-style: none;
}
img {
  max-width: 100%;
  height: auto;
}
button{
	cursor: pointer;
}
`;
