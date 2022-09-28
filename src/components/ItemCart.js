import React from 'react';
import { useCartContext } from '../CartContext';

const ItemCart = ({ product }) => {

    const { removeProduct } = useCartContext();

    return (
        <div className="ItemCart">
            <p className="tituloProducto">{data.title}</p>
            <p>Precio: ${data.precio}</p>
            <img src={data.img} alt="planta" className="imagenPlanta" />
            <p>Stock: {data.stock}</p>
            <p>Subtotal= $ {product.quantity * product.price}</p>
            <button onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
    )
}

export default ItemCart
