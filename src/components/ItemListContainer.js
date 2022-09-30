import React, { useState, useEffect } from 'react';

import ItemList from './ItemList';
import arboldejade from '../assets/img/arboldejade.jpg';
import areca from '../assets/img/areca.jpg';
import begoniamaculata from '../assets/img/begoniamaculata.jpg';
import { useParams } from 'react-router-dom';


const productos = [
  {
    "id": 1, "title": "Árbol de Jade", "img": arboldejade, "category": "exterior", "precio": 2000, "stock": 12, "button": "detalle del producto"
  },
  {
    "id": 2, "title": "Areca", "img": areca, "category": "exterior", "precio": 5000, "stock": 9, "button": "detalle del producto"
  },
  {
    "id": 3, "title": "Begonia Maculata", "img": begoniamaculata, "category": "interior", "precio": 8000, "stock": 3, "button": "detalle del producto"
  },
]

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {

      setTimeout(() => {
        resolve(productos)
      }, 2000);
    });
    if (categoriaId) {
      getData.then(res => setData(res.filter(productos => productos.category === categoriaId)));
    } else {
      getData.then(res => setData(res))
    }

  }, [categoriaId])




  return (
    <>
      <div className="titulo">Bienvenidos a {greeting}</div>

      <ItemList data={data} />
    </>
  );
}



export default ItemListContainer;