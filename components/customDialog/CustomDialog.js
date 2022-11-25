import React from 'react';
import CustomButton from '../customButton/CustomButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import styles from './customDialog.module.css';

const CustomDialog = ({
  heading,
  body,
  open,
  setOpen,
  primaryBtnText,
  primaryBtnClick,
  primaryErrorBtn,  // error style primary btn
  secondaryBtnText,
  secondaryBtnClick,
  secondaryErrorBtn, // error style secondary btn
  headerClass,  // header class
  children
}) => {

  // Ref for MUI dialog: https://stackoverflow.com/questions/57329278/how-to-handle-outside-click-on-dialog-modal
  const handleClose = (e, reason) => {
    // if (reason && reason == 'backdropClick') return
    setOpen(false)
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      className={styles.wrapper}
      PaperProps={{
        className: styles.wrapperPaper
      }}
    >
      <DialogTitle className={styles.heading + ` ${headerClass && headerClass}`}>
        {heading}
      </DialogTitle>
      <DialogContent className={styles.contentContainer}>
        <DialogContentText className={styles.dialogContent}>{body}</DialogContentText>
        {children}
      </DialogContent>
      <DialogActions className={styles.actionsContainer}>
        <CustomButton
          secondary={!secondaryBtnText && true}
          errorBtn={secondaryErrorBtn && true}
          text={secondaryBtnText ? secondaryBtnText : 'Cancel'}
          onClick={secondaryBtnClick ? secondaryBtnClick : () => setOpen(false)}
          style={{ padding: '0.75rem 1.125rem' }}
        />
        <CustomButton
          primary
          text={primaryBtnText}
          errorBtn={primaryErrorBtn && true}
          onClick={primaryBtnClick}
          style={{ padding: '0.75rem 1.125rem' }}
          type={"submit"}
        />
      </DialogActions>
    </Dialog>
  )
}

export default CustomDialog
