import { useState, useEffect } from 'react';

import '../styles/globals.css';
import '../styles/root.css';

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';

import { AuthContext } from '../context/AllContext';
import Web3Provider from '../context/Web3Context';

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

  const [authUser, setAuthUser] = useState({
    name: "",
    addr: "",
    isLogIn: false,
    isAdmin: false,
  })

  const [loginModalOpen, setLoginModalOpen] = useState(false);

  // Get user data from session in case of reload
  useEffect(() => {
    JSON.parse(sessionStorage.getItem("user")) &&
      setAuthUser(JSON.parse(sessionStorage.getItem("user")))
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <div className={'webWrapper'}>
        <img src={bgImage.src} alt="background" className="bgImage" />

        <Web3Provider>
          <AuthContext.Provider value={{ authUser, setAuthUser, loginModalOpen, setLoginModalOpen }}>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </AuthContext.Provider>
        </Web3Provider>

      </div>
    </ThemeProvider>
  )
}

export default MyApp
