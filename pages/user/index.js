import React from 'react';
import CardSection from '../../components/section/CardSection';
import ProfileLayout from '../../components/profileLayout/ProfileLayout';
// Data
import { fundsData } from '../../data/fundDetails';

// User account page for users
const Profile = () => {
  return (
    <>
      <ProfileLayout />
      <CardSection
        heading={'Your Contributions'}
        fundsData={fundsData}
        style={{ paddingBottom: '6rem' }}
      />
    </>
  )
}

export default Profile
