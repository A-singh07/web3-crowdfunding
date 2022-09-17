import React from 'react';
// Data
import { fundsData } from '../../data/fundDetails';

import CardSection from '../../components/section/CardSection';

const Funds = () => {
  return (
    <main>
      <CardSection heading={"All Funds"} fundsData={fundsData} />
    </main>
  )
}

export default Funds
