import React, { useState } from 'react';
import './Menu.css';
import { useCart } from './CartContext'; // Import useCart

const Menu = () => {
  const [menuItems] = useState([
    { id: 1, name: 'Gobi', description: 'Delicious Gobi Fry', price: 'Rs 110', category: 'Starters', image: '/assets/gobi.jpg' },
    { id: 2, name: 'Biriyani', description: 'Authentic Hyderabadi Biriyani', price: 'Rs 150', category: 'Main Course', image: '/assets/Biriyani.jpg' },
    { id: 3, name: 'Ice Cream', description: 'Creamy Vanilla Ice Cream', price: 'Rs 50', category: 'Desserts', image: '/assets/ice-cream.jpg' },
    { id: 4, name: 'Paneer Tikka', description: 'Grilled Paneer Tikka', price: 'Rs 130', category: 'Starters', image: '/assets/paneer-tikka.jpg' },
    { id: 5, name: 'Chicken Korma', description: 'Succulent Chicken Korma', price: 'Rs 180', category: 'Main Course', image: '/assets/chicken-korma.jpg' },
    { id: 6, name: 'Lassi', description: 'Sweet Lassi Drink', price: 'Rs 80', category: 'Popular', image: '/assets/lassi.jpg' },
  ]);
  const [filteredItems, setFilteredItems] = useState(menuItems);
  
  const { addToCart } = useCart(); // Get the addToCart function from context

  const handleFilter = (category) => {
    if (category === 'All') {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(menuItems.filter(item => item.category === category));
    }
  };

  return (
    <div className="menu">
      <h1 className="menu-heading">Menu</h1>
      <div className="filters">
        <button onClick={() => handleFilter('All')}>All</button>
        <button onClick={() => handleFilter('Starters')}>Starters</button>
        <button onClick={() => handleFilter('Main Course')}>Main Course</button>
        <button onClick={() => handleFilter('Desserts')}>Desserts</button>
        <button onClick={() => handleFilter('Popular')}>Popular</button>
      </div>
      <div className="menu-items">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
