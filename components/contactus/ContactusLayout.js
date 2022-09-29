import { useState } from 'react';
import Image from 'next/image';

import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import CustomButtom from '../customButton/CustomButton';

import contactImage from '../../assets/image/contactus.svg';
import styles from './contactusLayout.module.css';

const ContactusLayout = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    console.log(formData);
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.leftSection}>
        <Image src={contactImage} />
      </div>
      <div className={styles.rightSection}>
        <h3 className={styles.heading}>Leave a message</h3>
        <p className={styles.subHeading}>
          Fill out this form and our team will contact you soon
        </p>

        <form className={styles.formContainer}>
          <div className={styles.fieldContainer}>
            <InputLabel className={styles.label}>Name</InputLabel>
            <TextField
              className={styles.field}
              id="name"
              name="name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              placeholder="Enter Name"
            />
          </div>
          <div className={styles.fieldContainer}>
            <InputLabel className={styles.label}>Email</InputLabel>
            <TextField
              className={styles.field}
              id="email"
              name="email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              placeholder="Enter Email"
            />
          </div>
          <div className={styles.fieldContainer}>
            <InputLabel className={styles.label}>Message</InputLabel>
            <TextField
              className={styles.field}
              id="message"
              name="message"
              variant="outlined"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
              placeholder="Enter Message"
            />
          </div>
          <CustomButtom
            text="Submit"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </section>
  )
}

export default ContactusLayout
