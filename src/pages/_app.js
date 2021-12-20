import Snowfall from 'react-snowfall'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      {process.browser && <Snowfall />}
      <Component {...pageProps} />
    </div>
  )
}