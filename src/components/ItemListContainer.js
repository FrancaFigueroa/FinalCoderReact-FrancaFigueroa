import React from 'react'
import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {
  const onAdd = (cantidad) => {
    alert(`${cantidad} productos agregados!`)
  }
  return (
    <>
      <div className="titulo">Bienvenidos a {greeting}</div>
      <ItemCount stock={5} initial={0} onAdd={onAdd} />
    </>
  )
}

export default ItemListContainer