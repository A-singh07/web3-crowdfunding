import { useState, useContext, useEffect } from 'react';
import CustomDialog from '../customDialog/CustomDialog';

import { Web3Context } from '../../context/Web3Context';
import { ADMIN_ADDRESS } from '../../constants';

import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import styles from './authModal.module.css';


const SignupModal = ({ open, setOpen }) => {

  const { walletAddress, registerUser, registerAdmin } = useContext(Web3Context);
  const [IsAdminSignup, setIsAdminSignup] = useState(false)

  const [values, setValues] = useState({
    addr: '',
    name: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const userSignup = () => {
    if (values.password !== values.confirmPassword) {
      setError(true);
      return
    }
    setError(false)

    const data = {
      addr: walletAddress,
      name: values.name,
      password: values.password,
      confirmPassword: values.confirmPassword,
    }

    registerUser(data)
      .then(res => {
        setOpen(false)
        alert(`User registered successfully, please login.`)
        // console.log(res)
      })
      .catch(err => {
        alert('Something went wrong!')
        setOpen(false)
        console.log(err)
      })
  }

  const adminSignup = () => {
    if (values.password !== values.confirmPassword) {
      setError(true);
      return
    }
    setError(false)

    const data = {
      addr: walletAddress,
      name: values.name,
      password: values.password,
      confirmPassword: values.confirmPassword,
    }

    registerAdmin(data)
      .then(res => {
        setOpen(false)
        alert(`Admin registered successfully, please login.`)
      })
      .catch(err => {
        alert('Something went wrong!')
        setOpen(false)
        console.log(err)
      })
  }

  useEffect(() => {
    if (walletAddress === ADMIN_ADDRESS) setIsAdminSignup(true)
    else setIsAdminSignup(false)
  }, [walletAddress])


  return (
    <CustomDialog
      heading={!IsAdminSignup ? 'Signup' : 'Admin Signup'}
      body={`Selected wallet address:`}
      open={open}
      setOpen={setOpen}
      primaryBtnClick={!IsAdminSignup ? userSignup : adminSignup}
      primaryBtnText={'Signup'}
      headerClass={IsAdminSignup && styles.adminModalHeader}
    >
      <p className={styles.walletAdd}>{walletAddress}</p>
      <p className={styles.inst}>Switch to desired wallet using MetaMask extension</p>
      <div className={styles.formContainer}>
        <TextField
          className={styles.fields}
          id="name"
          name="name"
          type={'name'}
          label={'Name'}
          value={values.name}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          autoFocus
        />

        <TextField
          className={styles.fields}
          id="password"
          name="password"
          type={values.showPassword ? 'text' : 'password'}
          label={'Password'}
          value={values.password}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          error={error}
          InputProps={{
            endAdornment:
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setValues({ ...values, showPassword: !values.showPassword })}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
          }}
        />

        <TextField
          className={styles.fields}
          id="confirmPassword"
          name="confirmPassword"
          type={values.showConfirmPassword ? 'text' : 'password'}
          label={'Confirm Password'}
          value={values.confirmPassword}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          error={error}
          helperText={error && `Passwords did not match`}
          InputProps={{
            endAdornment:
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle cnf password visibility"
                  onClick={() => setValues({ ...values, showConfirmPassword: !values.showConfirmPassword })}
                >
                  {values.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
          }}
        />
      </div>
    </CustomDialog>
  )
}

export default SignupModal
