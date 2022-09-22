import { useState } from 'react';
import CustomDialog from '../customDialog/CustomDialog';

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
    console.log(values)
  }

  return (
    <CustomDialog
      heading={'Login'}
      body={'Please log into your account!'}
      open={open}
      setOpen={setOpen}
      customFunction={userLogin}
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
          variant="standard"
          error={error}
          helperText={error && `Incorrect email`}
          autoFocus
        />

        <FormControl
          className={styles.fields}
          margin="normal"
          variant="standard"
          error={error}
        >
          <InputLabel htmlFor="login-password">Password</InputLabel>
          <Input
            id="login-password"
            name="password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={(e) => handleChange(e)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setValues({ ...values, showPassword: !values.showPassword })}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText id="email-helper-text">{error && `Incorrect password`}</FormHelperText>
        </FormControl>

      </form>
    </CustomDialog>
  )
}

export default LoginModal
