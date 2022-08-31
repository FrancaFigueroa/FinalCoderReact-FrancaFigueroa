import NavBar from "./components/NavBar";
import './app/styles.css'
import ItemListContainer from "./components/ItemListContainer";
const App = () => {
  return (
    <div>
        <NavBar/>
        <ItemListContainer greeting= "React Js"/>
    </div>
  );
}

export default App;
