import { useState, useContext } from 'react';
import { FundsContext } from '../../context/AllContext';
import CategoryCard from './CategoryCard';
import styles from './categoriesSection.module.css';

const CategoriesSection = ({ data }) => {

  const { setActiveCat, activeCat } = useContext(FundsContext);

  const toggleActive = (id) => {
    activeCat !== id ? setActiveCat(id) : setActiveCat('')
  }

  return (
    <section>
      <div className={styles.wrapper}>
        {
          data && data.map((card, index) =>
            <CategoryCard
              key={index}
              cardData={card}
              activeCat={activeCat}
              toggleActive={toggleActive}
            />
          )
        }
      </div>
    </section>
  )
}

export default CategoriesSection
