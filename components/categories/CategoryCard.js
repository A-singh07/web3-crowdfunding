import React from 'react';
import styles from './categoriesSection.module.css'

const CategoryCard = ({ cardData, activeCat, toggleActive }) => {

  return (
    <div
      className={styles.cardContainer + ` ${activeCat === cardData.categoryId && styles.categoryActive}`}
      onClick={() => toggleActive(cardData.categoryId)}
    >
      <div className={styles.imageContainer}>
        <img src={cardData.categoryImage} alt="category" />
      </div>
      <p className={styles.categoryName}>
        {cardData.categoryName}
      </p>
    </div>
  )
}

export default CategoryCard
