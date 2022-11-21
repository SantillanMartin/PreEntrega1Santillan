import React from 'react'
import Styles from '../Navbar/Styles/Styles.css'
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../../Imagenes/cupcake-logo.png'

const Navbar = () => {
  return (
    <header className='header'>
        <img src={Logo} className="header__logo--tamaño" alt="logo-cupcake" />
        <nav>
            <ul className='header__lista'>
              
              <li><a href="#">Home</a></li>
              <li><a href="#">Nuestras Tortas</a></li>
              <li><a href="#"> Acerca de Nosotros</a></li>
              <li><a href="#">¡Contactanos!</a></li>
            </ul>
        </nav>
        <section>
          
          <CartWidget/>
        </section>
        
    </header>
  )
}

export default Navbar