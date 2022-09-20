import React from 'react';
import CustomButton from '../customButton/CustomButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import styles from './customDialog.module.css';

const CustomDialog = ({ heading, body, open, setOpen, customFunction, children }) => {

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className={styles.wrapper}
      PaperProps={{
        className: styles.wrapperPaper
      }}
    >
      <DialogTitle className={styles.heading}>{heading}</DialogTitle>
      <DialogContent className={styles.contentContainer}>
        <DialogContentText>{body}</DialogContentText>
        {children}
      </DialogContent>
      <DialogActions className={styles.actionsContainer}>
        <CustomButton
          secondary
          text={'Cancel'}
          onClick={() => setOpen(false)}
          style={{ padding: '0.75rem 1.125rem' }}
        />
        <CustomButton
          primary
          text={'Login'}
          onClick={customFunction}
          style={{ padding: '0.75rem 1.125rem' }}
          type={"submit"}
        />
      </DialogActions>
    </Dialog>
  )
}

export default CustomDialog
