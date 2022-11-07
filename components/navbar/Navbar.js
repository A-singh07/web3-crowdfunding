import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';

import Button from '../customButton/CustomButton';
import CustomDrawer from '../customDrawer/CustomDrawer';
import LoginModal from '../authModals/LoginModal';
import SignupModal from '../authModals/SignupModal';

import { AuthContext } from '../../context/AllContext';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import styles from './navbar.module.css';

const Navbar = () => {

  // Auth Context
  const { authUser } = useContext(AuthContext);

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

  // Nav links for general user
  const navItems = [
    {
      name: 'Start a fundraiser',
      link: '/registerfund'
    },
    {
      name: 'View Funds',
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
  ];

  // Nav links for admin user
  const adminNavItems = [
    {
      name: 'Review funds',
      link: '/admin/funds'
    },
    // about and contact us not req for admin.
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Contact Us',
      link: '/contactus'
    }
  ]

  const authButtons = [
    <Button
      text={'Login'}
      secondary
      onClick={() => setOpenLogin(true)}
      style={!mobileView ? { padding: '0.75rem 1.5rem' } : {}}
      key={0}
    />,
    <Button
      text={'Signup'}
      primary
      onClick={() => setOpenSignup(true)}
      key={1}
      style={!mobileView ? { padding: '0.75rem 1.5rem' } : {}}
    />
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
                    list={!authUser.isAdmin ? navItems : adminNavItems}
                    anchor="top"
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    style={{ top: '68.5px' }} // Use ref to get the height of Header
                    buttonProps={authButtons}
                  />
                </div>
              ) : (
                <div className={styles.navRight}>
                  {
                    !authUser.isAdmin ?
                      navItems.map((item, i) =>
                        <Link href={item.link} key={i}>{item.name}</Link>
                      ) :
                      adminNavItems.map((item, i) =>
                        <Link href={item.link} key={i}>{item.name}</Link>
                      )
                  }
                  {
                    authButtons.map(button => button)
                  }
                </div>
              )
          }
        </nav>
      </header>

      {/* To avoid unnecessary rendering of modals in the DOM */}
      {
        openLogin &&
        <LoginModal
          open={openLogin}
          setOpen={setOpenLogin}
        />
      }
      {
        openSignup &&
        <SignupModal
          open={openSignup}
          setOpen={setOpenSignup}
        />
      }
    </>
  )
}

export default Navbar
