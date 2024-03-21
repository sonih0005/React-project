import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

  const [mobileMenu,setMobileMenu] = useState(true);

  const toggleMenu = ()=> {
    mobileMenu? setMobileMenu(false): setMobileMenu(true);
  }

  return (
   <nav className='container'>
   <img className='logo' src="./images/logo.png" alt="menu-icon" />

    <ul className={mobileMenu? '' : 'hide-mobile-menu'}>
    <li>Cryptocurrencies</li>
    <li>Exchanges</li>
    <li>Community</li>
    <li>Trades</li>
    <li className='search-icon'><img src="./images/searchicon.png" alt="search-icon" /></li>
    </ul>

    <img className='menu-icon' src="./images/menu-icon.png" alt="menu-icon"  onClick={toggleMenu}/>
   </nav>
  )
}

export default Navbar