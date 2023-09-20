import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Cart from './components/Cart';
import Home from './components/Home';
import About from './components/About';
import Store from './components/Store';
import productList from './productList';
import ProductCard from './components/ProductCard';

function App() {
  const [storeDisplay, setStoreDisplay] = useState(false);
  const [aboutDisplay, setAboutDisplay] = useState(false);
  const [homeDisplay, setHomeDisplay] = useState(true);
  const [cartDisplay, setCartDisplay] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <Header
        setStoreDisplay={setStoreDisplay}
        setAboutDisplay={setAboutDisplay}
        setHomeDisplay={setHomeDisplay}
        setCartDisplay={setCartDisplay}
        cartDisplay={cartDisplay}
      />
      {cartDisplay && (
        <Cart 
          cart={cart}
        />
      )}
      {aboutDisplay &&(
        <About />
      )}
      {homeDisplay &&(
        <Home />
      )}
      {storeDisplay &&(
        <Store 
          productList={productList}
          ProductCard={ProductCard}
          addToCart={addToCart}
        />
      )}
    </>
  )
}

export default App
