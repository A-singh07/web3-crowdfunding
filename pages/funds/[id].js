import React from 'react';
import { useRouter } from 'next/router';
// data
import { fundDetails, fundsData } from '../../data/fundDetails';

import CardSection from '../../components/section/CardSection';
import FundDetailsLayout from '../../components/details/FundDetailsLayout';

const FundDetails = () => {

  const router = useRouter()
  const { id } = router.query

  // API call here, using fundID, pass details to child component

  return (
    <main>
      <FundDetailsLayout fundDetails={fundDetails} />
      <CardSection heading={'Related Funds'} fundsData={fundsData} baseUrl={'/funds'} />
    </main>
  )
}

export default FundDetails
