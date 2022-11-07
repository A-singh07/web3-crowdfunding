import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import CustomDialog from '../customDialog/CustomDialog';

import { AuthContext } from '../../context/AllContext';

import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import styles from './authModal.module.css';


const LoginModal = ({ open, setOpen }) => {

  const { setAuthUser } = useContext(AuthContext);
  const router = useRouter();

  const [values, setValues] = useState({
    email: '',
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
    // Login api call
    // console.log(values)

    // Dummy User login
    if (values.email === "user@gmail.com" && values.password === '123') {
      const userData = {
        name: "General User 001",
        id: "GU001",
        token: "qwerty0123456789",
        isAdmin: false
      }
      sessionStorage.setItem("user", JSON.stringify(userData))
      setAuthUser(userData);
      setOpen(false);
      router.push('/funds')

    } else if (values.email === "admin@gmail.com" && values.password === '123') {
      const userData = {
        name: "Admin 001",
        id: "A001",
        token: "qwerty0123456789",
        isAdmin: true
      }
      sessionStorage.setItem("user", JSON.stringify(userData))
      setAuthUser(userData);
      setOpen(false);
      router.push('/admin/funds');
    }
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
      <form className={styles.formContainer}>
        <TextField
          className={styles.fields}
          id="email"
          name="email"
          type={'email'}
          label={'Email'}
          value={values.email}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          error={error}
          helperText={error && `Incorrect email`}
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
      </form>
    </CustomDialog>
  )
}

export default LoginModal
