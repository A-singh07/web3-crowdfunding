import { useContext } from 'react';
import CardSection from '../../components/section/CardSection';
import ProfileLayout from '../../components/profileLayout/ProfileLayout';

import { AuthContext } from '../../context/AllContext'
// Data
import { fundsData } from '../../data/fundDetails';

// User account page for users
const Profile = () => {
  const { authUser } = useContext(AuthContext)

  return (
    <>
      <ProfileLayout data={authUser} />
      {/* <CardSection
        heading={'Your Contributions'}
        fundsData={fundsData}
        style={{ paddingBottom: '6rem' }}
        baseUrl={'/funds'}
      /> */}
    </>
  )
}

export default Profile
