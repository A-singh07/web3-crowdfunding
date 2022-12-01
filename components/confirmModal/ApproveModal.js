import { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import CustomDialog from '../customDialog/CustomDialog';
import { Web3Context } from '../../context/Web3Context';

import styles from './donateModal.module.css';

const ApproveModal = ({ open, setOpen, fundId, fundName, approveType }) => {

  const { fundStatusAuth } = useContext(Web3Context);

  const [fundDetails, setFundDetails] = useState({
    fundId: fundId,
    message: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    fundDetails.message !== '' && setError('')

    setFundDetails({
      ...fundDetails,
      message: e.target.value
    })
  }

  // Request call to approve fund
  const approveFund = () => {
    fundStatusAuth({
      ...fundDetails,
      status: "Approved",
      message: "fund approved"
    }).then(res => {
      alert(`"${fundName}" is now approved!`)
      setOpen(false)
    })
  }

  const requestEdit = () => {
    if (!fundDetails.message) return setError("Enter a message!");

    fundStatusAuth({
      ...fundDetails,
      status: "In Progress"
    }).then(res => {
      alert(`"${fundName}" is in process now!`)
      setOpen(false)
    })
  }

  // Request call to approve fund
  const rejectFund = () => {
    if (!fundDetails.message) return setError("Enter a message!");

    fundStatusAuth({
      ...fundDetails,
      status: "Rejected"
    }).then(res => {
      alert(`"${fundName}" has been rejected!`)
      setOpen(false)
    })
  }

  return (
    <CustomDialog
      heading={"Are you sure?"}
      body={`Fund: ${fundName}`}
      open={open}
      setOpen={setOpen}
      primaryBtnClick={
        approveType === 'Approve' ? approveFund
          : approveType === 'Request Edit' ? requestEdit
            : approveType === 'Reject' ? rejectFund : () => { alert('No type selected!') }
      }
      primaryBtnText={approveType}
      primaryErrorBtn={approveType === 'Reject'}
    >
      <TextField
        className={styles.fields}
        id="message"
        name="message"
        label={'Message'}
        value={fundDetails.message}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        autoFocus
        error={error ? true : false}
        helperText={error}
      />
    </CustomDialog>
  )
}

export default ApproveModal
