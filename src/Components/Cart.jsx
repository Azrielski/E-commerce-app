import React from "react";

function Cart({cartItems, removeFromCart}) {
    //calculates the total price of the cart items.
    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
    0
    )

    return (
        <div   className="cart"  style={{ border: '1px solid black', padding: '10px', marginTop: '20px' }}>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>The cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total Price: ${totalPrice}</p>
        </>
      )}
    </div>
  );
}

export default Cart;