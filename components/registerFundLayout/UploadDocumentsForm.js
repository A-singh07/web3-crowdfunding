import { useState } from 'react';

import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';

import styles from './registerFundLayout.module.css';

const UploadDocumentsForm = () => {

  const [formData, setFormData] = useState([])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    // TODO: react-pdf or just let user upload multiple documents. [ pdf only ]
    <form className={styles.formContainer}>
      <div className={styles.fieldContainer}>
        <InputLabel className={styles.label}>Upload Documents</InputLabel>
        <TextField
          className={styles.field}
          type="file"
          id="fundName"
          name="fundName"
          variant="outlined"
          value={formData.fundName}
          onChange={handleChange}
          fullWidth
        />
      </div>
      <p className={styles.message}>
        *Documents will be reviewed by the admin before going live.
      </p>
    </form>
  )
}

export default UploadDocumentsForm
