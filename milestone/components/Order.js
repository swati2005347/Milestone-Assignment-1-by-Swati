// src/pages/Order.js
import React, { useState } from 'react';
import './Order.css'; // Import the newly created Order.css for custom styles

const Order = () => {
  const [orderDetails, setOrderDetails] = useState({
    size: 'Medium',
    addOns: ['Cheese'],
    quantity: 1,
  });

  const [cart, setCart] = useState([]);

  const handleAddToCart = () => {
    setCart((prevCart) => [
      ...prevCart,
      {
        ...orderDetails,
        id: prevCart.length + 1,
        price: calculatePrice(orderDetails.size, orderDetails.addOns),
      },
    ]);
    alert('Item added to cart!');
  };

  const calculatePrice = (size, addOns) => {
    let basePrice = 100;
    if (size === 'Medium') basePrice += 50;
    if (size === 'Large') basePrice += 100;

    addOns.forEach(addOn => {
      if (addOn === 'Cheese') basePrice += 20;
      if (addOn === 'Panner') basePrice += 30;
      if (addOn === 'Extra Sauce') basePrice += 10;
    });

    return basePrice * orderDetails.quantity;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      const updatedAddOns = checked
        ? [...orderDetails.addOns, value]
        : orderDetails.addOns.filter((addOn) => addOn !== value);

      setOrderDetails((prevDetails) => ({
        ...prevDetails,
        addOns: updatedAddOns,
      }));
    } else if (type === 'select-one' || type === 'number') {
      setOrderDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    }
  };

  return (
    <div className="order">
      <h1>Customize Your Order</h1>
      <div className="customization-card">
        <div className="form-group">
          <label>
            Size:
            <select
              name="size"
              value={orderDetails.size}
              onChange={handleChange}
            >
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </label>
        </div>

        <div className="form-group">
          <label>
            Add-Ons:
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="addOns"
                  value="Cheese"
                  checked={orderDetails.addOns.includes('Cheese')}
                  onChange={handleChange}
                />
                Cheese
              </label>
              <label>
                <input
                  type="checkbox"
                  name="addOns"
                  value="Panner"
                  checked={orderDetails.addOns.includes('Panner')}
                  onChange={handleChange}
                />
                Panner
              </label>
              <label>
                <input
                  type="checkbox"
                  name="addOns"
                  value="Extra Sauce"
                  checked={orderDetails.addOns.includes('Extra Sauce')}
                  onChange={handleChange}
                />
                Extra Sauce
              </label>
            </div>
          </label>
        </div>

        <div className="form-group">
          <label>
            Quantity:
            <input
              type="number"
              name="quantity"
              value={orderDetails.quantity}
              onChange={handleChange}
              min="1"
            />
          </label>
        </div>

        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>

      <div className="cart">
        <h2>Your Cart</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.size} - {item.addOns.join(', ')} - {item.quantity}x
                <span> - Rs. {item.price}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Order;
