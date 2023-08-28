import "./Header.css";

function Header(props) {
    
    function displayCart(){
        props.setCartDisplay(true);
        props.setAboutDisplay(false);
        props.setStoreDisplay(false);
        props.setHomeDisplay(false);
    }
    function displayAbout(){
        props.setAboutDisplay(true);
        props.setCartDisplay(false);
        props.setStoreDisplay(false);
        props.setHomeDisplay(false);
    }
    function displayHome(){
        props.setHomeDisplay(true);
        props.setCartDisplay(false);
        props.setAboutDisplay(false);
        props.setStoreDisplay(false);

    }
    function displayStore(){
        props.setStoreDisplay(true);
        props.setCartDisplay(false);
        props.setAboutDisplay(false);
        props.setHomeDisplay(false);
    }
  return (
    <div id="headerBox">
      <div id="headerTitleBox">
        <h1>Bryans Shopping Website</h1>  
      </div>  
      <div id="headerButtonBox">
        <button onClick={displayHome}>Home</button>
        <button onClick={displayAbout}>About</button>
        <button onClick={displayStore}>Store</button>
        <button onClick={displayCart}>Shopping Cart</button>
      </div>  
    </div>
  );
}

export default Header;
