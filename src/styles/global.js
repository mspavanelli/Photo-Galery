import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0
  }

  html, body {
    height: 100%
  }

  body {
    font-family: Arial, Helvetica, sans-serif
  }

  #root {
    max-width: 1120px;
    margin: 0 auto;
  }
`

export default GlobalStyles
