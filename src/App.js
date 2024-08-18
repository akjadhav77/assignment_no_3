import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CartPage from './pages/CartPage';
import ProductList from './components/productslist/ProductsList';

function App() {
    const [cartItems, setCartItems] = useState([]);

    const products = [
        { id: 1, name: 'iPhone 13', brand: 'Apple', price: 999 },
        { id: 2, name: 'Galaxy S21', brand: 'Samsung', price: 799 },
        { id: 3, name: 'Pixel 6', brand: 'Google', price: 599 },
        { id: 4, name: 'OnePlus 9', brand: 'OnePlus', price: 729 },
    ];

    const addToCart = (product) => {
        const existingItem = cartItems.find(item => item.id === product.id);

        if (existingItem) {
            setCartItems(
                cartItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const updateQuantity = (id, quantity) => {
        setCartItems(
            cartItems.map(item =>
                item.id === id ? { ...item, quantity: quantity } : item
            )
        );
    };

    return (
        <Router>
            <nav>
                <Link to="/">Home</Link> | <Link to="/cart">Cart ({cartItems.length})</Link>
            </nav>
            <Routes>
                <Route 
                    path="/" 
                    element={<ProductList products={products} addToCart={addToCart} />} 
                />
                <Route 
                    path="/cart" 
                    element={<CartPage 
                        cartItems={cartItems} 
                        removeFromCart={removeFromCart} 
                        updateQuantity={updateQuantity} 
                    />} 
                />
            </Routes>
        </Router>
    );
}

export default App;


// import React, { useState } from 'react';
// import ProductList from './components/productslist/ProductsList';
// import Cart from './components/cart/Cart';
// import './App.css';

//1
// function App() {
//   const [cartItems, setCartItems] = useState([]);

//   const products = [
//       { id: 1, name: 'iPhone 13', brand: 'Apple', price: 999 },
//       { id: 2, name: 'Galaxy S21', brand: 'Samsung', price: 799 },
//       { id: 3, name: 'Pixel 6', brand: 'Google', price: 599 },
//       { id: 4, name: 'OnePlus 9', brand: 'OnePlus', price: 729 },
//   ];

//   const addToCart = (product) => {
//       const existingItem = cartItems.find(item => item.id === product.id);

//       if (existingItem) {
//           setCartItems(
//               cartItems.map(item =>
//                   item.id === product.id
//                       ? { ...item, quantity: item.quantity + 1 }
//                       : item
//               )
//           );
//       } else {
//           setCartItems([...cartItems, { ...product, quantity: 1 }]);
//       }
//   };

//   const removeFromCart = (id) => {
//       setCartItems(cartItems.filter(item => item.id !== id));
//   };

//   const updateQuantity = (id, quantity) => {
//       setCartItems(
//           cartItems.map(item =>
//               item.id === id ? { ...item, quantity: quantity } : item
//           )
//       );
//   };

//   return (
//       <div className='main_container'>
//           <ProductList products={products} addToCart={addToCart} />
//           <Cart 
//               cartItems={cartItems} 
//               removeFromCart={removeFromCart} 
//               updateQuantity={updateQuantity} 
//           />
//       </div>
//   );
// }

// export default App;