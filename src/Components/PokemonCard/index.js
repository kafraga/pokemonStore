import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

export default function OnePokemon({ onePokemon, addCart, themeColor }) {
  const handleClick = () => {
    addCart(onePokemon);
  }
  return (
    <div className="col s6 m4 l4 xl2">
      <div className="card">
        <div className="card-image">
          <Link to={`/${onePokemon.name}`}>
            <img src={onePokemon.img} alt={`${onePokemon.name}`} />
          </Link>
        </div>
        <div className={styles.cardContent}>
          <Link to={`/${onePokemon.name}`} className={styles.cardContentLink} >
            <span>{onePokemon.name}</span>
          </Link>
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
