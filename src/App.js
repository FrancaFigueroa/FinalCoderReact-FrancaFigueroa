import NavBar from "./components/NavBar";
import './app/styles.css';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer.js";
import CartWidget from "./components/CartWidget";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="React Js" />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting="React Js" />} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
          <Route path='/carrito' element={<CartWidget />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
