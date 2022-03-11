import emotionReset from 'emotion-reset';
import { css, Global} from '@emotion/react'

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

const App = ({ Component, pageProps }) => (
  <>
    {globalStyles}
    <Component {...pageProps} />
  </>
)

export default App
