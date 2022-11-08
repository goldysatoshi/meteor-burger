import { Link } from 'react-router-dom'
import React, { useState } from 'react';

const Header = () => {

    const [active, setActive] = useState(false);
  
    const classToggle = () => {
        setActive(!active)
      }

  return (
    <header>
        <div className="header">

        <div className="loge">
            <h1>METEOR Burger</h1>
        </div>

        <nav>
            <ul className={`menulist ${active ? "active" : ""}`} onClick={classToggle}>
                <li>
                    <Link to={'/'}>HOME</Link>
                </li>
                {/* <li>
                    <Link to={'/Menu/'}>MENU</Link>
                </li> */}
                <li>
                    <Link to={'/map/'}>SHOP</Link>
                </li>
            </ul>
        </nav>
        <div className={`mobile-menu-icon ${active ? "active" : ""}`}
          onClick={classToggle}>
            <span className={`${active ? "active" : ""}`}></span>
            <span className={`${active ? "active" : ""}`}></span>
            <span className={`${active ? "active" : ""}`}></span>
         </div>
        </div>
    </header>
  )
}

export default Header;