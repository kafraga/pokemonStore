import React from 'react'
import styles from './stylesDesk.module.css'

export default function Cart({ cart, themeColor }) {

  const sumCart = () => {
    return cart.reduce((total, pokemon) => total + pokemon.priceNumber, 0);
  }
  return (
    <div className={`${styles.cart} z-depth-1`}>
      <h5 className={styles.cartTitle}>Carrinho</h5>
      <ul id={styles.collectionCart} className="collection">
        {cart.map((pokemonCart) => {
          return (
            <div>
              <li className="collection-item avatar">
                <div className={styles.cartItems}>
                  <div>
                    <img src={pokemonCart.img} alt={`imagem do pokemon ${pokemonCart.name}`} class="circle" />
                    <p>{pokemonCart.name}</p>
                    <p>{pokemonCart.price}</p>
                  </div>
                  <button className={`btn-floating ${themeColor}`}>
                    <i className="material-icons">remove_shopping_cart</i>
                  </button>
                </div>
              </li>
            </div>
          )
        })}
      </ul>
      <div className={styles.cartSum}>
        <p>Total:</p>
        <p>R$ {(sumCart().toFixed(2))}</p>
      </div>
    </div>
  )
}
