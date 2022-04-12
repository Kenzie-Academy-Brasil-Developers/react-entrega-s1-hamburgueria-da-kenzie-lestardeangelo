import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import ProductsList from './components/ProductsList/ProductsList';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';

function App() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [filterPesquisa, setFilterPesquisa] = useState([])
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() =>{
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
    .then((resp) => resp.json())
    .then((resp) => setProducts(resp))
    .catch((err) => console.log(err))
  }, []);

  useEffect(() =>{
    setFilteredProducts(products)
  }, [products])

  function showProducts(input){

    const filter = products.filter((item) =>(

          item.name.toLowerCase().includes(input.toLowerCase()) ||
          item.category.toLowerCase().includes(input.toLowerCase())
        
      ))

    setFilteredProducts(filter)
  }

  function handleClick(productId){

    const findIndex = currentSale.findIndex((item) => productId === item.id)

    const filter = products.filter((item) => productId === item.id)

    if(findIndex === -1){

      setCurrentSale([...currentSale, ...filter])
    }
   
  }

  function removeItems(productId){
    
    const removeItem = currentSale.filter((item) => item.id !== productId)

    setCurrentSale(removeItem)

  }
  
  return (

    <div className="App">
      <header className='header_pesquisa'>
        <p className='img_logo'></p>
        <div className='div_input_pesquisa'>
          <input onChange={(evt) => setFilterPesquisa(evt.target.value)} className='input_pesquisa'></input>
          <button onClick={() => showProducts(filterPesquisa)} className='btn_pesquisa'>Pesquisar</button>
        </div>
      </header>
      <ProductsList handleClick={handleClick} currentSale={currentSale} filteredProducts={filteredProducts}/>
      <Cart currentSale={currentSale} removeItems={removeItems}/>
    </div>
  );
}

export default App;
