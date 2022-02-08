import Navbar from '../components/Navbar'
import '../styles/globals.css'
import navbar
function MyApp({ Component, pageProps }) {
  return <>
  <Navbar/>
  <Component {...pageProps} />
  </>
}

export default MyApp
