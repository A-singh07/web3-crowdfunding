import React from 'react';
import { useRouter } from 'next/router';
// data
import { fundDetails } from '../../../data/fundDetails';

import FundDetailsLayout from '../../../components/details/FundDetailsLayout';

const FundDetetails = () => {

  const router = useRouter()
  const { id } = router.query

  // TODO: API call here, using fundID, pass details to child component

  return (
    <main>
      {/* TODO: Change this to Register fund layout, and pre-fill this fund's data. */}
      <FundDetailsLayout fundDetails={fundDetails} isCampaigner={true} />
    </main>
  )
}

export default FundDetetails
