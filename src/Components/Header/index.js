import React from 'react'
import styles from './styles.module.css'

export default function Header({ setColor, setType, themeColor, setSearchText }) {
  const handleClick = (newColor, newType) => {
    setColor(newColor);
    setType(newType);
  }

  const handleKeyUp = (event) => {
    setSearchText(event.target.value);
    console.log(event.target.value);
  }
  return (
    <header className="navbar-fixed">
      <div>
        <nav>
          <div className={`nav-wrapper ${themeColor}`} id={styles.navWrapperAlign}>
            <img className={`${styles.logo} hide-on-med-and-down`} src="./logo.png" alt="logo do pokemon" />

            <div className="input-field" id={styles.input}>
              <input id="search" type="search" required onKeyUp={handleKeyUp} />
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>

            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {themeColor === 'blue' ? <li><button className={`btn-floating btn-small waves-effect waves-light red lighten-1 ${styles.swapButton}`} onClick={() => handleClick("red", 10)}><i className="material-icons">sync</i></button></li>
                : <li><button className={`btn-floating btn-small waves-effect waves-light blue lighten-1 ${styles.swapButton}`} onClick={() => handleClick("blue", 11)}><i className="material-icons">sync</i></button></li>}


            </ul>
            <ul id="nav-mobile" className="right hide-on-large-only">
              {themeColor === 'blue' ? <li><button className={`btn-floating btn-small waves-effect waves-light red lighten-1 ${styles.swapButton}`} onClick={() => handleClick("red", 10)}><i className="material-icons">sync</i></button></li> :
                <li><button className={`btn-floating btn-small waves-effect waves-light blue lighten-1 ${styles.swapButton}`} onClick={() => handleClick("blue", 11)}><i className="material-icons">sync</i></button></li>
              }


            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
