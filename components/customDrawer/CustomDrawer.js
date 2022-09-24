import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CustomButtom from '../customButton/CustomButton';

import styles from './customDrawer.module.css'

// type Anchor = 'top' | 'left' | 'bottom' | 'right';

const CustomsDrawer = ({ list, anchor, style, isOpen, setIsOpen, buttonProps }) => {

  return (
    <Drawer
      anchor={anchor}
      open={isOpen}
      onClose={() => setIsOpen(false)}
      PaperProps={{
        sx: style
      }}
    >
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={() => setIsOpen(false)}
        onKeyDown={() => setIsOpen(false)}
      >
        <List className={styles.listContainer}>
          {
            list.map((item, index) =>
              <ListItem key={index} disablePadding>
                <Link href={item.link} passHref>
                  <div className={styles.listItem}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <p>{item.name}</p>
                  </div>
                </Link>
              </ListItem>
            )
          }
        </List>
        {
          buttonProps &&
          <div className={styles.buttonContainer}>
            {
              buttonProps.map(button => button)
            }
          </div>
        }
      </Box>
    </Drawer >
  )
}

export default CustomsDrawer

