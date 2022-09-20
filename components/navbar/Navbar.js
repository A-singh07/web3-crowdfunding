import { useState, useEffect } from 'react';
import Link from 'next/link';

import Button from '../customButton/CustomButton';
import CustomDrawer from '../customDrawer/CustomDrawer';
import LoginModal from '../authModals/LoginModal';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import styles from './navbar.module.css';

const Navbar = () => {

  const [mobileView, setMobileView] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false);

  // Mobile view nav state
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.innerWidth > 900 ? setMobileView(false) : setMobileView(true)

    window.addEventListener('resize', () => {
      window.innerWidth > 900 ? setMobileView(false) : setMobileView(true)
    })

    window.addEventListener('scroll', () => {
      window.scrollY > 30 ? setIsScrolled(true) : setIsScrolled(false)
    })
  }, [])


  // Auth modals
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);


  const navItems = [
    {
      name: 'Funds',
      link: '/funds'
    },
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Contact Us',
      link: '/contactus'
    }
  ]

  return (
    <>
      <header className={styles.navbarMain + ` ${isScrolled ? styles.navScroll : ''}`}>
        <nav className={styles.wrapper + " mainLayout"}>
          <h1 className={styles.logocontainer}>
            <Link href="/">LOGO</Link>
          </h1>
          {
            mobileView ?
              (
                <div className={styles.mobNav}>
                  <MenuRoundedIcon onClick={() => setIsOpen(!isOpen)} />
                  <CustomDrawer
                    list={navItems}
                    anchor="top"
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    style={{ top: '69px' }}
                  />
                </div>
              ) : (
                <div className={styles.navRight}>
                  {
                    navItems.map((item, i) =>
                      <Link href={item.link} key={i}>{item.name}</Link>
                    )
                  }
                  <Button
                    text={'Login'}
                    secondary
                    onClick={() => setOpenLogin(true)}
                  />
                  <Button
                    text={'Signup'}
                    primary
                  />
                </div>
              )
          }
        </nav>
      </header>
      <LoginModal
        open={openLogin}
        setOpen={setOpenLogin}
      />
    </>
  )
}

export default Navbar
