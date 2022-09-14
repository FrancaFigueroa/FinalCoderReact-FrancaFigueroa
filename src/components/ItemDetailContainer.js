import ItemDetail from './ItemDetail';
import React, { useState, useEffect } from 'react';
import arboldejade from '../assets/img/arboldejade.jpg';



const producto =
{
    "id": 1, "title": "Árbol de Jade", "img": arboldejade, "precio": 2000, "stock": 12, "button": "detalle del producto"
};


export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {

            setTimeout(() => {
                resolve(producto)
            }, 3000);
        });

        getData.then(res => setData(res))

    }, [])


    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;