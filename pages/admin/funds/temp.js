import { useState, useEffect } from 'react';
import { FundsContext } from '../../../context/FundsContext';

import CategoriesSection from '../../../components/categories/CategoriesSection';
import CardSection from '../../../components/section/CardSection';
import Header from '../../../components/header/Header';

// Data
import { fundsPageData, fundCategories } from '../../../data/fundDetails';

const Funds = () => {

  const [activeCat, setActiveCat] = useState('');
  const [fundsData, setFundsData] = useState([])

  // TODO: Fetch all funds.

  useEffect(() => {
    !activeCat ? setFundsData(fundsPageData) :
      setFundsData(fundsPageData.filter((fund) => fund.categoryId === activeCat))
  }, [activeCat])


  return (
    <FundsContext.Provider value={{ setActiveCat, activeCat }}>
      <main>
        <CategoriesSection
          data={fundCategories}
        />
        {
          fundsData.map(data =>
            activeCat && data.funds.length === 0 ?
              <CardSection
                key={data.categoryId}
                heading={data.categoryName}
                fundsData={data.funds}
                baseUrl={'/admin/funds/'}
              /> :
              data.funds.length !== 0 &&
              <CardSection
                key={data.categoryId}
                heading={data.categoryName}
                fundsData={data.funds}
                baseUrl={'/admin/funds/'}
              />
          )
        }
      </main>
    </FundsContext.Provider>
  )
}

export default Funds
