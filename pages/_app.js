import '../styles/globals.css';
import '../styles/root.css';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import bgImage from '../assets/image/BgGraphic.svg'

function MyApp({ Component, pageProps }) {
  return (
    <div className={'webWrapper'}>
      <img src={bgImage.src} alt="" className="bgImage" />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
