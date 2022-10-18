import React from 'react';
import { useCartContext } from '../CartContext';


const CartWidget = () => {
    const { totalProducts } = useCartContext();

    return (
        <div className="carrito">
            <img src="carro-de-la-carretilla.png" alt="carrito" />
            <span>{totalProducts() || ''}</span>
        </div>
    )
}

export default CartWidget;