import React, { useState, useEffect } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import arboldejade from '../assets/img/arboldejade.jpg';
import areca from '../assets/img/areca.jpg';
import begoniamaculata from '../assets/img/begoniamaculata.jpg';


const productos = [
  {
    "id": 1, "title": "Árbol de Jade", "img": arboldejade, "precio": 2000, "stock": 12, "button": "detalle del producto"
  },
  {
    "id": 2, "title": "Areca", "img": areca, "precio": 5000, "stock": 9, "button": "detalle del producto"
  },
  {
    "id": 3, "title": "Begonia Maculata", "img": begoniamaculata, "precio": 8000, "stock": 3, "button": "detalle del producto"
  },
]

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise(resolve => {

      setTimeout(() => {
        resolve(productos)
      }, 3000);
    });

    getData.then(res => setData(res))

  }, [])



  const onAdd = (cantidad) => {
    alert(`${cantidad} productos agregados!`)
  }
  return (
    <>
      <div className="titulo">Bienvenidos a {greeting}</div>
      <ItemCount stock={5} initial={0} onAdd={onAdd} />
      <ItemList data={data} />
    </>
  );
}



export default ItemListContainer;