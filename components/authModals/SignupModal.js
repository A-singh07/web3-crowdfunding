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
    consfirmPassword: '',
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
          <FormHelperText id="helper-text-pass">{error && `Incorrect password`}</FormHelperText>
        </FormControl>

        <FormControl
          className={styles.fields}
          margin="normal"
          variant="standard"
          error={error}
        >
          <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
          <Input
            id="confirm-password"
            name="password"
            type={values.showConfirmPassword ? 'text' : 'password'}
            value={values.consfirmPassword}
            onChange={(e) => handleChange(e)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setValues({ ...values, showConfirmPassword: !values.showConfirmPassword })}
                >
                  {values.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText id="helper-text-cnfPass">{error && `Incorrect password`}</FormHelperText>
        </FormControl>

      </form>
    </CustomDialog>
  )
}

export default SignupModal
