import React from 'react'
import styles from './stylesDesk.module.css'
import M from "materialize-css";

export default function Cart({ cart, themeColor, cartFinish }) {

  const sumCart = () => {
    return cart.reduce((total, pokemon) => total + pokemon.priceNumber, 0);
  }

  const handleFinishCart = () => {
    cartFinish();
    var modal = document.querySelector('#modal1');
    var instance = M.Modal.getInstance(modal);
    instance.open();
  }

  return (
    <div>
      <div id="modal1" className="modal">
        <div className="modal-content">
          <h4>Obrigado pela compra!</h4>
        </div>
      </div>
      <div className={`${styles.cart} z-depth-1`}>
        <h5 className={styles.cartTitle}>Carrinho</h5>
        <ul id={styles.collectionCart} className="collection">
          {cart.map((pokemonCart, index) => {
            return (
              <div key={index}>
                <li className="collection-item avatar">
                  <div className={styles.cartItems}>
                    <div>
                      <img src={pokemonCart.img} alt={`imagem do pokemon ${pokemonCart.name}`} className="circle" />
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
        <div className={styles.btnCartFinish}>
          <button className={` btn ${themeColor} ${cart.length === 0 && 'disabled'}`} data-target="modal1" onClick={handleFinishCart}>
            Finalizar
          </button>
        </div>
      </div>
    </div>
  )
}
