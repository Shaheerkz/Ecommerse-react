import React, { useState } from 'react';
import './navbar.css';
import logo from '../logo.png';
import cart_icon from '../cart_icon.png'

const Navbar = () => {
    const [menu, setMenu] = useState("shop")
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="...." />
            <p>Shopper</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=> {setMenu("shop")}}>Shop{menu==='shop'?<hr></hr>:<></>} </li>
            <li onClick={()=> {setMenu("mens")}}>Men {menu==='mens'?<hr></hr>:<></>}</li>
            <li onClick={()=> {setMenu("womens")}}>Women {menu==='womens'?<hr></hr>:<></>}</li>
            <li onClick={()=> {setMenu("kids")}}>Kids {menu==='kids'?<hr></hr>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button>login</button>
            <img src={cart_icon} alt="...." />
            <div className="nav-cart-count">
                0
            </div>
        </div>
    </div>
  )
}

export default Navbar

