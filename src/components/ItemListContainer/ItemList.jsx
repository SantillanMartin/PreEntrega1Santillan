import React from 'react'
import Styles from '../ItemListContainer/Styles/Styles.css'

const ItemList = ({name}) => {
  return (
    <div className='Itemlist--posicion'>
      <section>{name}</section>    
    </div>
  )
}

export default ItemList