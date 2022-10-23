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
      <FundDetailsLayout fundDetails={fundDetails} isAdmin={true} />
    </main>
  )
}

export default FundDetetails
