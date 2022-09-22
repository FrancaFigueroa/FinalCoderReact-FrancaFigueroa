import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

export const ItemDetail = ({ data }) => {

    const [goTocart, setGotoCart] = useState(false);

    const onAdd = (cantidad) => {
        setGotoCart(true);
    }
    return (
        <Link to={`/detalle/${data.id}`} className="detalle-producto">
            <div className="contenedor-productos">
                <p className="tituloProducto">{data.title}</p>
                <p>Precio: ${data.precio}</p>
                <img src={data.img} alt="planta" className="imagenPlanta" />
                <p>Stock: {data.stock}</p>
                <button className="btn-card">{data.button}</button>
                {
                    goTocart
                        ? <link to='/carrito'>Terminar compra</link>
                        : <ItemCount stock={5} initial={0} onAdd={onAdd} />}


            </div>
        </Link>
    );
}

export default ItemDetail;