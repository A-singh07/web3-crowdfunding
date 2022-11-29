import { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Web3Context } from '../../context/Web3Context';

// data
import { fundDetails, fundsData } from '../../data/fundDetails';

import CardSection from '../../components/section/CardSection';
import FundDetailsLayout from '../../components/details/FundDetailsLayout';

const FundDetails = () => {

  const router = useRouter()
  const { id } = router.query

  const { getFundDetails, walletAddress } = useContext(Web3Context);
  const [fundData, setFundData] = useState();

  useEffect(() => {
    id && walletAddress &&
      getFundDetails(id)
        .then(res => {
          setFundData(res)
        })
        .catch(err => console.log("Error: ", err))
  }, [id, walletAddress])

  return (
    <main style={{ minHeight: '50vh' }}>
      <FundDetailsLayout fundDetails={fundData} />
      <CardSection heading={'Related Funds'} fundsData={fundsData} baseUrl={'/funds'} />
    </main>
  )
}

export default FundDetails
