import React from 'react';
import { useCart } from '../CartContext';

const Cart = () => {
  const { cart, updateQty, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  const handleCheckout = () => {
    // Add your checkout logic here (e.g., redirect to checkout page, process payment, etc.)
    console.log('Proceeding to checkout...');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded"
            >
              <img src={item.img} alt={item.name} className="w-20 h-20 object-cover" />
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p>${item.price} x {item.quantity}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQty(item.id, -1)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >-</button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQty(item.id, 1)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >+</button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-xl"
                >×</button>
              </div>
            </div>
          ))}
          <div className="text-right space-y-4">
            <div className="text-xl font-bold">
              Total: ₹{total}
            </div>
            <button
              onClick={handleCheckout}
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;