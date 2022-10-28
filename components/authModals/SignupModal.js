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


const SignupModal = ({ open, setOpen }) => {

  const [values, setValues] = useState({
    email: '',
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
    // Match passwords
    // If ok -> Signup api call
    console.log(values)
  }

  return (
    <CustomDialog
      heading={'Signup'}
      body={`Please create an account if you haven't already!`}
      open={open}
      setOpen={setOpen}
      customFunction={userSignup}
      btnText="Login"
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
      </form>
    </CustomDialog>
  )
}

export default SignupModal
