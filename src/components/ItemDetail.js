import React from 'react';
import ItemCount from './ItemCount';

export const ItemDetail = ({ data }) => {
    return (
        <div className="contenedor-productos">
            <p className="tituloProducto">{data.title}</p>
            <p>Precio: ${data.precio}</p>
            <img src={data.img} alt="planta" className="imagenPlanta" />
            <p>Stock: {data.stock}</p>
            <button className="btn-card">{data.button}</button>
            <ItemCount />


        </div>
    );
}

export default ItemDetail;