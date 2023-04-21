import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  font-family: 'Manrope', sans-serif;
  font-weight: 800;
  box-sizing: border-box;
    
  color: ${({ theme }) => theme.colors.lightCyan};
  background-color: ${({ theme }) => theme.colors.darkBlue};
  
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  }

  
  body {
    margin: 0 auto;
    font-size: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  h6, p{
    margin: 0;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {}

`;

export default GlobalStyles;
