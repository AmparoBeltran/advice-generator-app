import { ThemeProvider } from 'styled-components'
import GlobalStyles from "./components/styles/Global"
import MainContainer from './components/MainContainer'


const theme = {
  colors: {

    //Primary

    lightCyan: 'hsl(193, 38%, 86%)',
    neonGreen: 'hsl(150, 100%, 66%)',

    //Neutral

    grayishBlue: 'hsl(217, 19%, 38%)',
    darkGrayishBlue: 'hsl(217, 19%, 24%)',
    darkBlue: 'hsl(218, 23%, 16%)',
  },

  mobile: '768px'
}



function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainContainer />
    </ThemeProvider>
  )
}

export default App


