import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/NavBar';
import ItemList from './components/ItemListContainer/ItemList';


function App() {
  const saludo="Hola, bienvenido a SweetCake-Bakery"
  return (
    
    <div>
      <Navbar/>
      <ItemList name={saludo}/>
    </div>
    
    
  );
}

export default App;
