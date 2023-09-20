import "./Store.css";
import ProductCard from "./ProductCard";
// import Shoe from '../assets/shoe-irene-kredenets.jpg'
// import Puma from '../assets/puma-shoe-dk.jpg'
// import Red from '../assets/red-shoe-dominoe.jpg'
// import Boot from '../assets/boot-or-hakim.jpg'

function Store(props) {
    return (
      <>
        {props.productList.map((product)=>(
          <ProductCard
            key={product.id}
            product={product}
            addToCart={props.addToCart}

          />
        ))}

        {/* <div>
          <div id="StoreTitleBox">
            <h1 id="storeTitle">Hello from the Store Page!!!!</h1>
          </div>
          <div id="storeCardContainer">
            <div id="storeCard">
              <img
                id="shoePic"
                src={Shoe}
                alt="a really cool shoe"
              />
              <div id="storeCardTitleBox">
                <p id="storeCardTitle">Really Cool Shoe</p>
                <p id="storeCardPrice">$10,000</p>
              </div>
              <div id="storeCardPriceBox">
                <p>Quantity:</p>
                <input type="number" id="quantity" placeholder="1" name="quantity" min="1" max="5"></input>
                <button id="storeCardButton">Add to Cart</button>
              </div>
            </div>
            <div id="storeCard">
              <img
                id="shoePic"
                src={Puma}
                alt="a really cool shoe"
              />
              <p id="storeCardTitle">Really Cool Shoe</p>
              <div id="storeCardPriceBox">
                <p id="storeCardPrice">$10,000</p>
                <button id="storeCardButton">Add to Cart</button>
              </div>
            </div>
            <div id="storeCard">
              <img
                id="shoePic"
                src={Red}
                alt="a really cool shoe"
              />
              <p id="storeCardTitle">Really Cool Shoe</p>
              <div id="storeCardPriceBox">
                <p id="storeCardPrice">$10,000</p>
                <button id="storeCardButton">Add to Cart</button>
              </div>
            </div>
            <div id="storeCard">
              <img
                id="shoePic"
                src={Boot}
                alt="a really cool shoe"
              />
              <p id="storeCardTitle">Really Cool Shoe</p>
              <div id="storeCardPriceBox">
                <p id="storeCardPrice">$10,000</p>
                <button id="storeCardButton">Add to Cart</button>
              </div>
            </div>
          </div>
        </div> */}
      </>
    );
  }
  
  export default Store;
  