import { useState, useEffect, useContext } from 'react';
import { Web3Context } from '../../../context/Web3Context';

import CardSection from '../../../components/section/CardSection';

// Data
// import { fundsData } from '../../../data/fundDetails';


// Funds that current user has registered
const Funds = () => {
  const { fundraiserHistory, walletAddress } = useContext(Web3Context);
  const [fundsList, setFundsList] = useState([])

  useEffect(() => {
    walletAddress &&
      fundraiserHistory(walletAddress)
        .then(res => {
          setFundsList(res)
          // console.log("HISTORY:", res)
        })
        .catch(err => console.log(err))
  }, [walletAddress])

  return (
    <>
      <CardSection
        showAll
        heading={"Your Registered Funds"}
        fundsData={fundsList}
        baseUrl={'/user/funds'}
      />
    </>
  )
}

export default Funds
