import React from "react";
import ProductItem from './ProductItem';
// import './Productlist.css'

  // This function adds a product to the cart.
function ProductList({ products, addToCart }) {
  
    return (
      <div>
        <h2>Products</h2>
        <div className="products-List">
          {products.map((product) => (
            <ProductItem key={product.id} products={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    );
  }
  
  export default ProductList;