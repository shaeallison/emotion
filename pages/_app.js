import emotionReset from 'emotion-reset';
import { css, Global, ThemeProvider} from '@emotion/react'
import '../src/fonts/fonts.css'

const globalStyles = (
  <Global
    styles={css`
      ${emotionReset}

      * {
        box-sizing: border-box;
      }

      html {
        font-size: 62.5% !important;
        scroll-behavior: smooth;
      }

      body {
        font-family: 'Barlow', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    `}
  />
)

const theme = {
  colors: {
    primary: '#005776',
    secondary: '#576F7D',
    tertiary: '#004A64',
    accent: '#51E6DF',
    white: '#fff',
    border: '#DBDBDB'
  },
}

const App = ({ Component, pageProps }) => (
  <>
    {globalStyles}
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)

export default App
