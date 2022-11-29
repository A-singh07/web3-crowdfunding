import { useEffect, useState } from 'react';
import HeaderLight from '../header/HeaderLight';
import CustomInput from '../customInput/CustomInput';
import CustomButton from '../customButton/CustomButton';

import Avatar from '@mui/material/Avatar';

import styles from './profileLayout.module.css';

const ProfileLayout = ({ data }) => {

  const [profileData, setProfileData] = useState({
    name: '',
    wallet: '87'
  });

  useEffect(() => {
    setProfileData({
      name: data ? data.name : '',
      wallet: data ? data.address : '',
    })
  }, [data])

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    })
  }

  const saveProfile = () => {
    // To save profile data changes
  }

  return (
    <section>
      <HeaderLight heading={'Account Info'} />
      <div className={styles.mainContainer}>

        {/* Profile image */}
        <div className={styles.leftSection}>
          <Avatar alt="" src="" className={styles.avatar} />

          <CustomButton
            secondary
            text={"Check your fundraisers"}
            link={'/user/funds'}
            style={{
              padding: '0.75rem 1.5rem',
            }}
          />
        </div>

        {/* Info container */}
        <div className={styles.infoContainer}>
          <CustomInput
            label={'Name'}
            name="name"
            placeholder="Name"
            value={profileData.name}
            onChange={handleChange}
          />
          <CustomInput
            label={'Wallet'}
            name="wallet"
            placeholder="wallet"
            value={profileData.wallet}
            onChange={handleChange}
          />
          <CustomButton
            primary
            text={"Save"}
            style={{
              padding: '0.75rem 1.5rem',
              marginLeft: 'auto'
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default ProfileLayout
