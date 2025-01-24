import { useState } from "react";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import './styles.css';


const products = [
  { id: 1, name: 'T-Shirt', price: 20, image: '/assets/tshirt.jpg' },
  { id: 2, name: 'Jeans', price: 40, image: '/assets/jeans.jpg' },
  { id: 3, name: 'Sneakers', price: 60, image: '/assets/sneakers.jpg' },
  { id: 4, name: 'Hat', price: 15, image: '/assets/hat.jpg' },
  { id: 5, name: 'Socks', price: 5, image: '/assets/socks.jpg' },
];

function App() {
    const [cartItems, setCartItems] = useState([]);
  
    const addToCart = (products) => {
      setCartItems((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === products.id);
        if (existingItem) {
          return prevCart.map((item) =>
            item.id === products.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...prevCart, { ...products, quantity: 1 }];
      });
    };
  
    const removeFromCart = (id) => {
      setCartItems((prevCart) =>
        prevCart.filter((item) => item.id !== id)
      );
    };
  
    return (
      <div>
        <h1>Simple E-Commerce Cart</h1>
        <ProductList products={products} addToCart={addToCart} />
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
    );
  }
  <script src="App.js"></script>
  
  export default App;
  