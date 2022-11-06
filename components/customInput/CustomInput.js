import React from 'react';

import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';

import styles from './customInput.module.css';

const CustomInput = ({ label, name, value, onChange, placeholder, type, rows }) => {
  return (
    <div className={styles.fieldContainer}>
      <InputLabel className={styles.label}>{label}</InputLabel>
      <TextField
        fullWidth
        variant="outlined"
        type={type}
        className={styles.field}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows ? rows : '1'}
        multiline={rows && true}
      />
    </div>
  )
}

export default CustomInput
