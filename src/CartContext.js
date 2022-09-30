import React, { useState, useContext } from 'react';
export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


const CartProvider = ({ children }) => {
    const addProduct = (Item, newQuantity) => {
        const newCart = cart.filter(prod => prod.id !== Item.id);
        newCart.push({ ...Item, quantity: newQuantity });
        setCart(newCart)
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProduct = () => {
        cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);
    }
    //almacenar carrito
    const { cart, setCart } = useState({});

    //limpiar carrito
    const clearCart = () => setCart({});

    //saber su un producto esta en el carrito
    const isInCard = (id) => {
        return cart.find(product => product.id === id) ? true : false;
    }
    //borrar carrito
    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));





    return (
        <CartContext.Provider value={{
            clearCart,
            isInCard,
            removeProduct,
            addProduct,
            totalPrice,
            totalProduct,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider