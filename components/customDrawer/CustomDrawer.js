import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import styles from './drawer.module.css'

// type Anchor = 'top' | 'left' | 'bottom' | 'right';

const CustomsDrawer = ({ list, anchor, style, isOpen, setIsOpen }) => {

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
                <ListItemButton className={styles.listItem}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            )
          }
        </List>
        <Divider />
      </Box>
    </Drawer >
  )
}

export default CustomsDrawer

