import React from 'react'
import styles from './stylesMobile.module.css'
import M from "materialize-css";

export default function CartMobile({ cart, themeColor, cartFinish }) {

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
      <ul id="slide-out" className="sidenav">
        <h5 className={styles.cartMobileTitle}>Carrinho</h5>
        {cart.map((pokemonCart, index) => {
          return (
            <div key={index}>
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
        <div className={styles.btnCartMobileFinish} onClick={handleFinishCart}>
          <button className={` btn ${themeColor}`}>
            Finalizar
        </button>
        </div>
      </ul>
      <a className={`fixed-action-btn btn-floating btn-large sidenav-trigger ${themeColor}`} href="#!" data-target="slide-out"><i className="material-icons right">shopping_cart</i></a>
    </div>
  )
}
