import React, { useState, useContext } from "react";
export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProduct = (item, newQuantity) => {
        let newCart = [...cart];
        if (isInCart(item.id)) {
            newCart = newCart.map((product) => {
                const newValue = product.quantity + newQuantity
                if (product.id === item.id && product.stock >= newValue) {
                    product.quantity += newQuantity;
                }
                return product;
            });
            return setCart(newCart)
        }
        newCart.push({ ...item, quantity: newQuantity });
        setCart(newCart);
    };

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    };

    const totalProducts = () => {
        return cart.reduce((acumulador, productoActual) => {
            return acumulador + productoActual.quantity;
        }, 0);
    };
    const clearCart = () => setCart([]);

    const isInCart = (id) => {
        return cart.find((prod) => prod.id === id) ? true : false;
    };

    const removeProduct = (id) =>
        setCart(cart.filter((product) => product.id !== id));

    return (
        <CartContext.Provider
            value={{
                clearCart,
                isInCart,
                removeProduct,
                addProduct,
                totalPrice,
                totalProducts,
                cart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;