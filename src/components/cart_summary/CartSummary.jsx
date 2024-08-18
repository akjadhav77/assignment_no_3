import React from 'react';

const CartSummary = ({ cartItems }) => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = subtotal > 1000 ? 0.1 * subtotal : 0; // Example: 10% discount on orders above $1000
    const total = subtotal - discount;

    return (
        <div style={{ border: '1px solid #ddd', padding: '20px' }}>
            <h2>Cart Summary</h2>
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Discount: ${discount.toFixed(2)}</p>
            <h3>Total: ${total.toFixed(2)}</h3>
            <button onClick={() => alert('Proceed to Checkout')}>Checkout</button>
        </div>
    );
};

export default CartSummary;