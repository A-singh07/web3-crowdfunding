import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Button from '../customButton/CustomButton';
import CustomDrawer from '../customDrawer/CustomDrawer';
import CustomMenu from '../customMenu/CustomMenu';
import LoginModal from '../authModals/LoginModal';
import SignupModal from '../authModals/SignupModal';

import { AuthContext } from '../../context/AllContext';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import userAvatarIcon from '../../assets/icons/user-avatar.svg';
import downArrowIcon from '../../assets/icons/green-down-arrow.svg';

import styles from './navbar.module.css';

const Navbar = () => {

  // Auth Context
  const { authUser, setAuthUser } = useContext(AuthContext);

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

  // Profile Menu
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget)
  }

  // Logout
  const logoutUser = () => {
    sessionStorage.removeItem("user");
    setAuthUser({
      name: "",
      id: "",
      token: "",
      isAdmin: false,
    });
  }

  // User Profile Menu
  const menuItems = [
    {
      name: 'Profile',
      link: `${!authUser.isAdmin ? '/user' : '/admin'}`,
      itemOnClick: () => { }
    },
    {
      name: `${!authUser.isAdmin ? 'Fundraiser History' : 'Review Funds'}`,
      link: `${!authUser.isAdmin ? '/user/funds' : '/admin/funds'}`,
      itemOnClick: () => { }
    },
    {
      name: 'Logout',
      link: '/',
      itemOnClick: logoutUser
    }
  ];

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
    {
      name: 'Help',
      link: '/contactus'
    }
  ]

  // login-signup buttons
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
                    authUser.token ?
                      <div className={styles.dropdownButton} onClick={handleOpenMenu}>
                        <div className={styles.menuLeft}>
                          <Image src={userAvatarIcon.src} width={30} height={30} alt='' />
                          <p className={styles.userName}>{authUser.name}</p>
                        </div>

                        <Image src={downArrowIcon.src} width={10} height={5} alt='' />
                      </div>
                      : authButtons.map(button => button)
                  }
                </div>
              )
          }
        </nav>
      </header>

      {/* To avoid unnecessary rendering of modals on page load */}
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
      {
        openMenu &&
        <CustomMenu
          open={openMenu}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          menuItems={menuItems}
        />
      }
    </>
  )
}

export default Navbar
