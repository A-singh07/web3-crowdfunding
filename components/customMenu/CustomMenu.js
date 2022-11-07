import React from 'react';
import Link from 'next/link'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import styles from './customMenu.module.css';

const CustomMenu = ({ open, anchorEl, setAnchorEl, menuItems }) => {

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
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
            <Link href={item.link} key={i} passHref>
              <MenuItem
                onClick={item.onClick ? () => { item.onClick(); handleClose(); } : handleClose}
                className={styles.menuItems}
              >
                {item.name}
              </MenuItem>
            </Link>
          )
        }
      </Menu>
    </div>
  )
}

export default CustomMenu
