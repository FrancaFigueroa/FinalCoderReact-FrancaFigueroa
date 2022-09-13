import React from 'react';
import ItemCount from './ItemCount';


const Item = ({ info }) => {
    return (
        <div className="contenedor-productos">
            <p className="tituloProducto">{info.title}</p>
            <p>Precio: ${info.precio}</p>
            <img src={info.img} alt="planta" className="imagenPlanta" />
            <p>Stock: {info.stock}</p>
            <button className="btn-card">{info.button}</button>
            <ItemCount />


        </div>
    );
}

export default Item;