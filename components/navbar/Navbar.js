import { useState, useEffect } from 'react';
import Link from 'next/link';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';
import Button from '../customButton/CustomButton';

import styles from './navbar.module.css';

const Navbar = () => {

  const matches = useMediaQuery("(max-width: 900px)");

  const [mobileView, setMobileView] = useState(true)

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.innerWidth > 900 ? setMobileView(false) : setMobileView(true)

    window.addEventListener('resize', () => {
      window.innerWidth > 900 ? setMobileView(false) : setMobileView(true)
    })


    window.addEventListener('scroll', () => {
      window.scrollY > 30 ? setIsScrolled(true) : setIsScrolled(false)
    })
  }, [])

  return (
    <header className={styles.navbarMain + ` ${isScrolled ? styles.navScroll : ''}`}>
      <nav className={styles.wrapper + " mainLayout"}>
        <h1 className={styles.logocontainer}>
          <Link href="/">LOGO</Link>
        </h1>
        {
          mobileView ?
            (
              <></>
            ) : (
              <div className={styles.navRight}>
                <Link href="/funds">Funds</Link>
                <Link href="/about">About</Link>
                <Link href="/contactus">Contact Us</Link>
                <Button text={'Login'} secondary />
                <Button text={'Signup'} primary />
              </div>
            )
        }
      </nav>
    </header>
  )
}

export default Navbar
