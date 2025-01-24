import React from "react";
import ProductItem from './ProductItem';


  // This function adds a product to the cart.
function ProductList({ products, addToCart }) {
    return (
      <div>
        <h2>Products</h2>
        <div className="products-Lsist">
          {products.map((products) => (
            <ProductItem key={products.id} products={products} addToCart={addToCart} />
          ))}
        </div>
      </div>
    );
  }
  
  export default ProductList;