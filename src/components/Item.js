import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import React from 'react';
import { useCartContext } from "../CartContext";

const Item = ({ info }) => {
    const { addProduct } = useCartContext();
    return (
        <div className="contenedor-productos">
            <Link to={`/detalle/${info.id}`} className="detalle-producto">
                <p className="tituloProducto">{info.title}</p>
                <p>Precio: ${info.price}</p>
                <img src={info?.image} alt="planta" className="imagenPlanta" />
                <p>Stock: {info.stock}</p>
                <button className="btn-card">{info.button}</button>
            </Link>
            <ItemCount
                temCount
                item={info}
                initial={0}
                onAdd={(item, contador) => {
                    addProduct(item, contador);
                }} />
        </div>

    );
}

export default Item;