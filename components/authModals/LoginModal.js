import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import CustomDialog from '../customDialog/CustomDialog';

import { AuthContext } from '../../context/AllContext';
import { Web3Context } from '../../context/Web3Context';


import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import styles from './authModal.module.css';


const LoginModal = ({ open, setOpen }) => {

  const { setAuthUser } = useContext(AuthContext);
  const { walletAddress, loginUser, getUserInfo } = useContext(Web3Context);

  const router = useRouter();

  const [values, setValues] = useState({
    addr: '',
    name: '',
    password: '',
    showPassword: false
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const userLogin = () => {
    const data = {
      addr: walletAddress,
      name: values.name,
      password: values.password
    }

    loginUser(data)
      .then(res => {
        // get user info after login success
        getUserInfo(walletAddress)
          .then(res => {
            const userData = {
              name: res.name,
              isAdmin: false,
              address: res.addr,
              isLogIn: res.isLogIn
            }
            sessionStorage.setItem("user", JSON.stringify(userData))
            setAuthUser(userData)
            setOpen(false)
            router.push('/funds')
          })
      })
      .catch(err => {
        setOpen(false);
        console.log(err)
        alert('Something went wrong!')
      })


    // Dummy User login
    // if (values.email === "user@gmail.com" && values.password === '123') {
    //   const userData = {
    //     name: "General User 001",
    //     id: "GU001",
    //     token: "qwerty0123456789",
    //     isAdmin: false
    //   }
    //   sessionStorage.setItem("user", JSON.stringify(userData))
    //   setAuthUser(userData);
    //   setOpen(false);
    //   router.push('/funds')

    // } else if (values.email === "admin@gmail.com" && values.password === '123') {
    //   const userData = {
    //     name: "Admin 001",
    //     id: "A001",
    //     token: "qwerty0123456789",
    //     isAdmin: true
    //   }
    //   sessionStorage.setItem("user", JSON.stringify(userData))
    //   setAuthUser(userData);
    //   setOpen(false);
    //   router.push('/admin/funds');
    // }
  }


  return (
    <CustomDialog
      heading={'Login'}
      body={'Please log into your account!'}
      open={open}
      setOpen={setOpen}
      primaryBtnClick={userLogin}
      primaryBtnText="Login"
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
          error={error}
          helperText={error && `Incorrect name`}
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
          helperText={error && `Incorrect password`}
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
      </div>
    </CustomDialog>
  )
}

export default LoginModal
