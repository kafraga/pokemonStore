import React from 'react'
import styles from './stylesMobile.module.css'

export default function CartMobile({ cart, themeColor }) {

  const sumCart = () => {
    return cart.reduce((total, pokemon) => total + pokemon.priceNumber, 0);
  }

  return (
    <div>
      <ul id="slide-out" className="sidenav">
        <h5 className={styles.cartMobileTitle}>Carrinho</h5>
        {cart.map((pokemonCart) => {
          return (
            <div>
              <li className="divider"></li>
              <div className={styles.cartMobileItems}>
                <img className={styles.cartMobileItemsImg} src={pokemonCart.img} alt={`imagem do pokemon ${pokemonCart.name}`} />
                <li className={styles.cartMobileItemsInfo}>
                  <div className={styles.cartMobileItemsInfoLine}>
                    <p>{pokemonCart.name}</p>
                    <p>{pokemonCart.price}</p>
                  </div>
                </li>
                <button className={`btn-floating ${themeColor}`}>
                  <i className="material-icons">remove_shopping_cart</i>
                </button>
              </div>
            </div>
          )
        })
        }
        <li className="divider"></li>
        <div className={styles.cartMobileSum}>
          <p>Total:</p>
          <p>R$ {(sumCart().toFixed(2))}</p>
        </div>
      </ul>
      <a className={`fixed-action-btn btn-floating btn-large sidenav-trigger ${themeColor}`} href="#!" data-target="slide-out"><i className="material-icons right">shopping_cart</i></a>
    </div>
  )
}
