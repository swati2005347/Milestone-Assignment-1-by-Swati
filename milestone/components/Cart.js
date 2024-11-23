import React from 'react';
import './Cart.css';
import { useCart } from './CartContext'; // Import useCart

const Cart = () => {
  const { cartItems, updateQuantity, removeItem } = useCart();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Your Cart</h1>
        <p>Review your order and proceed to checkout</p>
      </div>

      <div className="cart-items-list">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src={`https://via.placeholder.com/150?text=${item.name}`} alt={item.name} />
              </div>
              <div className="item-details">
                <h3>{item.name}</h3>
                <p><strong>Price:</strong> Rs {item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                  />
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button onClick={() => removeItem(item.id)} className="remove-item-button">
                  Remove Item
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="cart-total">
        <h3>Total: Rs {totalPrice}</h3>
      </div>

      <div className="checkout-container">
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
