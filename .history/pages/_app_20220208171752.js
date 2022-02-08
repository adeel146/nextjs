import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { Provider } from 'next-auth/client'
import '../components/Navbar.css'

function MyApp({ Component, pageProps }) {
  return <Provider>
  <Navbar/>
  <Component {...pageProps} />
  </Provider>
}

export default MyApp
