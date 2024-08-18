import React from 'react'

const ProductItems = ({ product, addToCart }) => {
    return (
        <div className='productitems_container' style={{ border: '1px solid #ddd', margin: '10px', padding: '10px', width: '200px' }}>
            <h3>{product.name}</h3>
            <p>{product.price}$</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductItems