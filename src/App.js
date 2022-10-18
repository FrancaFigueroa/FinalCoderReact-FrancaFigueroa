import React from 'react';
import NavBar from "./components/NavBar";
import './app/styles.css';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer.js";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './CartContext';


function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Plantasia" />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting="Plantasia" />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
            <Route path='/carrito' element={<Cart />} />
          </Routes>
        </CartProvider>

      </BrowserRouter>
    </>
  );
}

export default App;
