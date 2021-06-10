import React from 'react'
import styles from './styles.module.css'

export default function Header({ setColor, setType, themeColor }) {
  const handleClick = (newColor, newType) => {
    setColor(newColor);
    setType(newType);
  }
  return (
    <header className="navbar-fixed">
      <div>
        <nav>
          <div className={`nav-wrapper ${themeColor}`}>
            <img className={styles.logo} src="./logo.png" alt="logo do pokemon" />
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {themeColor === 'blue' ? <li><button className={`btn-floating btn-small waves-effect waves-light red lighten-1 ${styles.swapButton}`} onClick={() => handleClick("red", 10)}><i class="material-icons">sync</i></button></li>
                : <li><button className={`btn-floating btn-small waves-effect waves-light blue lighten-1 ${styles.swapButton}`} onClick={() => handleClick("blue", 11)}><i class="material-icons">sync</i></button></li>}


            </ul>
            <ul id="nav-mobile" className="right hide-on-large-only">
              {themeColor === 'blue' ? <li><button className={`btn-floating btn-small waves-effect waves-light red lighten-1 ${styles.swapButton}`} onClick={() => handleClick("red", 10)}><i class="material-icons">sync</i></button></li> :
                <li><button className={`btn-floating btn-small waves-effect waves-light blue lighten-1 ${styles.swapButton}`} onClick={() => handleClick("blue", 11)}><i class="material-icons">sync</i></button></li>
              }


            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
