import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../components/context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  const navigate = useNavigate();

  // Calculate total amount
  const getTotalAmount = () => {
    return food_list.reduce((total, item) => {
      if (cartItems[item._id] > 0) {
        return total + item.price * cartItems[item._id];
      }
      return total;
    }, 0);
  };

  return (
    <div className='cart'>
      <h2>Your Cart</h2>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {/* Render items in the cart */}
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className='cart-items-title cart-items-item' key={item._id}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price * cartItems[item._id]}</p>
                <p
                  onClick={() => removeFromCart(item._id)}
                  style={{ cursor: 'pointer' }}
                >
                  ❌
                </p>
              </div>
            );
          }
          return null;
        })}

        {/* Show total or empty message */}
        {getTotalAmount() > 0 ? (
          <div className='cart-total'>
            <h3>Total: ${getTotalAmount()}</h3>
            <button onClick={() => navigate('/order')}>Proceed to Checkout</button>
          </div>
        ) : (
          <h3 className='empty-cart-msg'>Your cart is empty.</h3>
        )}
      </div>
    </div>
  );
};

export default Cart;
