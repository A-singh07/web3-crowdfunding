import { useState, useEffect } from 'react';
import { FundsContext } from '../../../context/AllContext';

// import FundsListLayout from '../../../components/fundsListLayout/FundsListLayout';
import CardSection from '../../../components/section/CardSection';

// Data
import { fundsData } from '../../../data/fundDetails';


// Funds that this user has registered
const Funds = () => {
  // return (
  //   <FundsListLayout isAdmin={false} />
  // )

  return (
    <main>
      <CardSection
        showAll
        heading={"Registered Funds"}
        fundsData={fundsData}
        baseUrl={'/user/funds/'}
      // TODO: 
      // change route to '/user/funds/' that should lead to register fund flow, 
      // but pre-filled with this fund's data
      />
    </main>
  )
}

export default Funds
