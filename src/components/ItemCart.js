import React from 'react';
import { useCartContext } from '../CartContext';

const ItemCart = ({ product }) => {

    const { removeProduct } = useCartContext();

    return (
        <div className="contenedor-productos">
            <p className="tituloProducto">{product.title}</p>
            <p>Precio: ${product.price}</p>
            <img src={product.image} alt="planta" className="imagenPlanta" />
            <p>Cantidad: {product.quantity}</p>
            <p>Subtotal= $ {product.quantity * product.price}</p>
            <button onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
    )
}

export default ItemCart;
