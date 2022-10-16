import { useState } from 'react';

import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';

import styles from './registerFundLayout.module.css';

const FundDetailsForm = () => {

  const [formData, setFormData] = useState({
    fundName: '',
    description: '',
    targetAmount: '',
    deadline: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form className={styles.formContainer}>
      <div className={styles.fieldContainer}>
        <InputLabel className={styles.label}>Fund Name</InputLabel>
        <TextField
          className={styles.field}
          id="fundName"
          name="fundName"
          variant="outlined"
          value={formData.fundName}
          onChange={handleChange}
          fullWidth
          placeholder="Enter fund name"
        />
      </div>

      <div className={styles.fieldContainer}>
        <InputLabel className={styles.label}>Description</InputLabel>
        <TextField
          className={styles.field}
          id="description"
          name="description"
          variant="outlined"
          value={formData.description}
          onChange={handleChange}
          fullWidth
          placeholder="Enter description"
          multiline
          rows='5'
        />
      </div>

      <div className={styles.fieldContainer}>
        <InputLabel className={styles.label}>Target Amount</InputLabel>
        <TextField
          className={styles.field}
          // type="number"
          id="targetAmount"
          name="targetAmount"
          variant="outlined"
          value={formData.targetAmount}
          onChange={handleChange}
          fullWidth
          placeholder="Enter target amount"
        />
      </div>

      <div className={styles.fieldContainer}>
        <InputLabel className={styles.label}>Deadline</InputLabel>
        <TextField
          className={styles.field}
          type="date"
          id="deadline"
          name="deadline"
          variant="outlined"
          value={formData.deadline}
          onChange={handleChange}
          fullWidth
          placeholder="Enter deadline"
        />
      </div>
    </form>
  )
}

export default FundDetailsForm
