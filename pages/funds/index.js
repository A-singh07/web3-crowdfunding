import { useState, useEffect } from 'react';
import { FundsContext } from '../../context/AllContext';
// Data
import { fundsPageData, fundCategories } from '../../data/fundDetails';

import CategoriesSection from '../../components/categories/CategoriesSection';
import CardSection from '../../components/section/CardSection';

const Funds = () => {

  const [activeCat, setActiveCat] = useState('');
  const [fundsData, setFundsData] = useState([])

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
                baseUrl={'/funds/'}
              /> :
              data.funds.length !== 0 &&
              <CardSection
                key={data.categoryId}
                heading={data.categoryName}
                fundsData={data.funds}
                baseUrl={'/funds/'}
              />
          )
        }
      </main>
    </FundsContext.Provider>
  )
}

export default Funds
