import React from 'react';
import FundsListLayout from '../../../components/fundsListLayout/FundsListLayout';

// List of all funds for admin
const Funds = () => {
  return (
    <FundsListLayout isAdmin={true} />
  )
}

export default Funds
