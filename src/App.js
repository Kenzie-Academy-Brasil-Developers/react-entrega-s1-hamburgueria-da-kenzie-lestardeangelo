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

    const find = currentSale.find(item => productId === item.id)

    if(findIndex === -1){

      setCurrentSale([...currentSale, find])
    }
   
  }

  return (
    <div className="App">
      <header className='header_pesquisa'>
        <p className='img_logo'></p>
        <div className='div_input_pesquisa'>
          <input className='input_pesquisa'></input>
          <button className='btn_pesquisa'>Pesquisar</button>
        </div>
      </header>
      <ProductsList handleClick={handleClick} currentSale={currentSale} products={products}/>
      <Cart currentSale={currentSale}/>
    </div>
  );
}

export default App;
