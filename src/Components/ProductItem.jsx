import React from "react";

function ProductItem({ products, addToCart }){

return (
    <div  style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
         <img
                src={products.image}
                alt={products.name}
                style={{ width: "150px", height: "150px", objectFit: "cover", marginBottom: "10px" }}
            />
        <h3>{products.name}</h3>
        <p>Price: ${products.price}</p>
        <button onClick={() => addToCart(products)}>Add to Cart</button>
    </div>
)
}

export default ProductItem;






