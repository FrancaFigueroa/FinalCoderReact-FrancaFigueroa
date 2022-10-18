import { Link } from 'react-router-dom';
import React from 'react';

const Item = ({ product }) => {
    return (
        <div className="contenedor-productos">
            <p className="tituloProducto">{product.title}</p>
            <p>Precio: ${product.price}</p>
            <img src={product?.image} alt="planta" className="imagenPlanta" />
            <p>Stock: {product.stock}</p>
            <Link to={`/detalle/${product.id}`} className="detalle-producto">
                <button className="btn-card">Ver mas</button>
            </Link>
        </div>

    );
}

export default Item;