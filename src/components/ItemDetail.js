import React from 'react';
import { useCartContext } from '../CartContext'
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

export const ItemDetail = ({ data }) => {

    const { addProduct } = useCartContext();

    const onAdd = (item, cantidad) => {
        addProduct(item, cantidad);
    }
    return (

        <div className="contenedor-productos">
            <p className="tituloProducto">{data.title}</p>
            <p>Precio: ${data.price}</p>
            <img src={data?.image} alt="planta" className="imagenPlanta" />
            <p>Stock: {data.stock}</p>
            <ItemCount item={data} initial={1} onAdd={onAdd} />
            <Link to='/carrito'>Terminar compra</Link>
        </div>
    );
}

export default ItemDetail;