import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../CartContext';
import ItemCart from './ItemCart';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: ' Pablo',
            email: 'pablo@gmail.com',
            phone: 12345,
            adress: 'Pablito'
        },
        items: cart.map(planta => ({ id: planta.id, title: planta.title, price: planta.price, quantity: planta.quantity })),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then(({ id }) => console.log(id))
    }

    if (cart.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>hacer compras</Link>
            </>
        );
    }
    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p>total: ${totalPrice()}</p>
            <button onClick={handleClick}>generar orden</button>
        </>
    )
}

export default Cart