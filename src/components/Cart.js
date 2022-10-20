import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext";
import FormularioCheckout from "./FormularioCheckout";
import ItemCart from "./ItemCart";

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    const order = {
        items: cart.map((planta) => ({
            id: planta.id,
            title: planta.title,
            price: planta.price,
            quantity: planta.quantity,
        })),
        total: totalPrice(),
    };

    const generarOrden = async (order) => {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        const { id } = await addDoc(ordersCollection, order);
        return id;
    };

    if (cart.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to="/">Hacer compras</Link>
            </>
        );
    }
    return (
        <>
            {cart.map((product) => (
                <ItemCart key={product.id} product={product} />
            ))}
            <p>total: ${totalPrice()}</p>
            <FormularioCheckout order={order} generarOrden={generarOrden} />
        </>
    );
};

export default Cart;