import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import React from 'react';

const Item = ({ info }) => {
    return (
        <Link to={`/detalle/${info.Id}`} className="detalle-producto">
            <div className="contenedor-productos">
                <p className="tituloProducto">{info.title}</p>
                <p>Precio: ${info.precio}</p>
                <img src={info.img} alt="planta" className="imagenPlanta" />
                <p>Stock: {info.stock}</p>
                <button className="btn-card">{info.button}</button>
                <ItemCount />
            </div>
        </Link>
    );
}

export default Item;