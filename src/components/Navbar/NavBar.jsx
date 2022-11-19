import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <header>
        <nav>
            <ul>
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