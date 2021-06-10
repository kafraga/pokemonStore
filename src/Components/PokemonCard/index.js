import React from 'react'
import styles from './styles.module.css'

export default function OnePokemon({ onePokemon, addCart, themeColor }) {
  const handleClick = () => {
    addCart(onePokemon);
  }
  return (
    <div className="col s6 m4 l4 xl2">
      <div className="card">
        <div className="card-image">
          <img src={onePokemon.img} alt={`${onePokemon.name}`} />
        </div>
        <div className={styles.cardContent}>
          <span>{onePokemon.name}</span>
          <div className={styles.cardContentShopping}>
            <p className={styles.cardContentPriceInfo}>{onePokemon.price}</p>
            <button className={`btn-floating ${styles.cartContentBtn} ${themeColor}`} onClick={handleClick}>
              <i className="material-icons">add_shopping_cart</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
