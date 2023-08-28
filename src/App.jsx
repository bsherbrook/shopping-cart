import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Cart from './components/Cart';
import Home from './components/Home';
import About from './components/About';
import Store from './components/Store';


function App() {
  const [storeDisplay, setStoreDisplay] = useState(false);
  const [aboutDisplay, setAboutDisplay] = useState(false);
  const [homeDisplay, setHomeDisplay] = useState(true);
  const [cartDisplay, setCartDisplay] = useState(false); 



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
        <Cart />
      )}
      {aboutDisplay &&(
        <About />
      )}
      {homeDisplay &&(
        <Home />
      )}
      {storeDisplay &&(
        <Store />
      )}
    </>
  )
}

export default App
