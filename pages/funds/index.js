import { useState } from 'react';
import { FundsContext } from '../../context/FundsContext';
// Data
import { fundsPageData, fundCategories } from '../../data/fundDetails';

import CategoriesSection from '../../components/categories/CategoriesSection';
import CardSection from '../../components/section/CardSection';

const Funds = () => {

  const [activeCat, setActiveCat] = useState('');

  return (
    <FundsContext.Provider value={{ setActiveCat, activeCat }}>
      <main>
        <CategoriesSection
          data={fundCategories}
        />
        {
          !activeCat ?
            (
              fundsPageData
                .map(funds =>
                  <CardSection
                    key={funds.categoryId}
                    heading={funds.categoryName}
                    fundsData={funds.funds}
                    style={{ paddingBottom: '0' }}
                  />
                )
            ) : (
              fundsPageData
                .filter((fund) => fund.categoryId === activeCat)
                .map(funds =>
                  <CardSection
                    key={funds.categoryId}
                    heading={funds.categoryName}
                    fundsData={funds.funds}
                    style={{ paddingBottom: '0' }}
                  />
                )
            )
        }
      </main>
    </FundsContext.Provider>
  )
}

export default Funds
