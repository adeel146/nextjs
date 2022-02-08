import Navbar from '../components/Navbar'
import '../styles/globals.css'
import '../components/Navbar.css'
import geta

function MyApp({ Component, pageProps }) {
  return <>
  <Navbar/>
  <Component {...pageProps} />
  </>
}

export default MyApp
