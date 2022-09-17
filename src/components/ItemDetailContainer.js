import ItemDetail from './ItemDetail';
import React, { useState, useEffect } from 'react';
import arboldejade from '../assets/img/arboldejade.jpg';
import areca from '../assets/img/areca.jpg';
import begoniamaculata from '../assets/img/begoniamaculata.jpg';
import { useParams } from 'react-router-dom';




const productos = [
    {
        id: 1, "title": "Árbol de Jade", "img": arboldejade, "category": "exterior", "precio": 2000, "stock": 12, "button": "detalle del producto"
    },
    {
        id: 2, "title": "Areca", "img": areca, "category": "exterior", "precio": 5000, "stock": 9, "button": "detalle del producto"
    },
    {
        id: 3, "title": "Begonia Maculata", "img": begoniamaculata, "category": "interior", "precio": 8000, "stock": 3, "button": "detalle del producto"
    },
]


export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { detalleId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {

            setTimeout(() => {
                resolve(productos)
            }, 3000);
        });
        getData.then(res => setData(res.find(producto => producto.category === parseInt.detalleId)))
    }, [])


    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;