import type { AppProps } from 'next/app'
import { StateProvider } from '../context/State.context'
import '../styles/App.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateProvider>
      <Component {...pageProps} />
    </StateProvider>
  )
}

export default MyApp
