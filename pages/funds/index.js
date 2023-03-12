import { useState, useEffect, useContext } from 'react';
import { FundsContext } from '../../context/AllContext';
import { Web3Context } from '../../context/Web3Context';

// Data
import { fundsPageData, fundCategories } from '../../data/fundDetails';

import CategoriesSection from '../../components/categories/CategoriesSection';
import CardSection from '../../components/section/CardSection';

const Funds = () => {

  const { getApprovedFunds } = useContext(Web3Context);
  const [activeCat, setActiveCat] = useState('');
  const [fundsData, setFundsData] = useState([])

  // Category filtering logic
  // useEffect(() => {
  //   !activeCat ? setFundsData(fundsPageData) :
  //     setFundsData(fundsPageData.filter((fund) => fund.categoryId === activeCat))
  // }, [activeCat])

  useEffect(() => {
    getApprovedFunds()
      .then(res => {
        setFundsData(res)
      })
      .catch(err => console.error(err))
  }, [])


  return (
    <FundsContext.Provider value={{ setActiveCat, activeCat }}>
      <main style={{ minHeight: '50vh' }}>
        {/* <CategoriesSection
          data={fundCategories}
        /> */}
        <CardSection
          heading={"All Funds"}
          fundsData={fundsData}
          baseUrl={'/funds'}
          showAll
        />
        {
          // ------ Category Filter ----- //
          // fundsData.map((data, i) =>
          // activeCat && data.funds.length === 0 ?
          //   <CardSection
          //     key={data.categoryId}
          //     heading={data.categoryName}
          //     fundsData={data.funds}
          //     baseUrl={'/funds'}
          //   /> :
          //   // If no category selected -> return only non-empty sections
          //   data.funds.length !== 0 &&
          //   <CardSection
          //     key={data.categoryId}
          //     heading={data.categoryName}
          //     fundsData={data.funds}
          //     baseUrl={'/funds'}
          //   />
          // )
          // ------ Category Filter ----- //
        }
      </main>
    </FundsContext.Provider>
  )
}

export default Funds
