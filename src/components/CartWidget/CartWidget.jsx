import React from 'react'
import Styles from '../CartWidget/Styles/Styles.css'
import carrito from '../CartWidget/carrito.svg'

const CartWidget = () => {
  return (
    <section>
      <span>3</span>
      <img src={carrito} className="header__nav__carrito--img" alt="carrito-compras" />
    </section>
  )
}

export default CartWidget