import '../styles/globals.css';
import '../styles/root.css';

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import bgImage from '../assets/image/BgGraphic.svg'

function MyApp({ Component, pageProps }) {

  // Creating default theme for MUI components
  const theme = createTheme({
    palette: {
      primary: {
        main: '#3aab9f',
      },
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <div className={'webWrapper'}>
        <img src={bgImage.src} alt="background" className="bgImage" />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
