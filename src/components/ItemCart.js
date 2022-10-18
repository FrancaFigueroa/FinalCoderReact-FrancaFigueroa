import React from 'react';
import { useCartContext } from '../CartContext';

const ItemCart = ({ product }) => {

    const { removeProduct } = useCartContext();

    return (
        <div className="contenedor-productos">
            {console.log(product)}
            <p className="tituloProducto">{product.title}</p>
            <p>Precio: ${product.price}</p>
            <img src={product.image} alt="planta" className="imagenPlanta" />
            <p>Stock: {product.stock}</p>
            <p>Subtotal= $ {product.quantity * product.price}</p>
            <button onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
    )
}

export default ItemCart
