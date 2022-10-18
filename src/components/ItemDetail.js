import React, { useState } from 'react';
import { useCartContext } from '../CartContext'
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

export const ItemDetail = ({ data }) => {

    const [goTocart, setGotoCart] = useState(false);
    const { addProduct } = useCartContext();

    const onAdd = (cantidad) => {
        setGotoCart(true);
        addProduct(data, cantidad);
    }
    return (

        <div className="contenedor-productos">
            <p className="tituloProducto">{data.title}</p>
            <p>Precio: ${data.price}</p>
            <img src={data?.image} alt="planta" className="imagenPlanta" />
            <p>Stock: {data.stock}</p>
            <button className="btn-card">{data.button}</button>
            {
                goTocart
                    ? <Link to='/carrito'>Terminar compra</Link>
                    : <ItemCount stock={data.stock} initial={1} onAdd={onAdd} />}
        </div>
    );
}

export default ItemDetail;