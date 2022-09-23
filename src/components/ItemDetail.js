import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

export const ItemDetail = ({ data }) => {

    const [goTocart, setGotoCart] = useState(false);

    const onAdd = (cantidad) => {
        setGotoCart(true);
    }
    return (

        <div className="contenedor-productos">
            <p className="tituloProducto">{data.title}</p>
            <p>Precio: ${data.precio}</p>
            <img src={data.img} alt="planta" className="imagenPlanta" />
            <p>Stock: {data.stock}</p>
            <button className="btn-card">{data.button}</button>
            {
                goTocart
                    ? <Link to='/carrito'>Terminar compra</Link>
                    : <ItemCount stock={5} initial={0} onAdd={onAdd} />}
        </div>
    );
}

export default ItemDetail;