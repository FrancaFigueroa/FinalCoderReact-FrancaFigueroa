import NavBar from "./components/NavBar";
import './app/styles.css';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer.js";


const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="React Js" />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
