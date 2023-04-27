import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      <div>
        {cart.map((serv) => {
          const { id, name, quantity, price } = serv;
          const total = quantity * price;

          return (
            <div key={id}>
              <p>Service added: {name}</p>
              <p>Quantity: {quantity}</p>
              <p>Total: {total}</p>
            </div>
          );
        })}
      </div>
      <Link to="/checkout">Proceed checkout</Link>
    </div>
  );
};

export default Cart;
