import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import styles from './customMenu.module.css';

const CustomMenu = ({ open, anchorEl, setAnchorEl, menuItems }) => {

  // const { name, link, itemOnClick } = menuItems;

  const router = useRouter();

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClick = (item) => {

    item.itemOnClick() ? itemOnClick() : null;
    item.link && router.push(item.link);
    handleClose();
  }

  return (
    <>
      <Menu
        id="profile-menu"
        className={styles.menu}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          sx: {
            minWidth: '230px',
            padding: '0'
          }
        }}
      >
        {
          menuItems && menuItems.map((item, i) =>
            // <Link href={item.link} key={i} passHref>
            <MenuItem
              key={i}
              onClick={() => handleClick(item)}
              className={styles.menuItems}
            >
              {item.name}
            </MenuItem>
            // </Link>
          )
        }
      </Menu>
    </>
  )
}

export default CustomMenu
