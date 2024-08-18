import React from 'react'

// const Cart = ({ cartItems }) => {
//     const total = cartItems.reduce((sum, item) => sum + item.price, 0);

//     return (
//         <div>
//             <h2>Cart</h2>
//             {cartItems.length === 0 ? (
//                 <p>Your cart is empty</p>
//             ) : (
//                 <div>
//                     <ul>
//                         {cartItems.map((item, index) => (
//                             <li key={index}>
//                                 {item.name} - ${item.price}
//                             </li>
//                         ))}
//                     </ul>
//                     <h3>Total: ${total}</h3>
//                 </div>
//             )}
//         </div>
//     );
// };

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index} style={{ marginBottom: '10px' }}>
                                <div>
                                    <strong>{item.name}</strong> - ${item.price}
                                </div>
                                <div>
                                    Quantity: 
                                    <button 
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                                        disabled={item.quantity <= 1}
                                    >
                                        -
                                    </button>
                                    <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                </div>
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${total.toFixed(2)}</h3>
                </div>
            )}
        </div>
    );
};

export default Cart