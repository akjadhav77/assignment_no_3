import React, { useState } from 'react';
import ProductItems from '../productitems/ProductItems';

const ProductList = ({ products, addToCart }) => {
    return (
        <div>
            <h2>Products</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {products.map(product => (
                    <ProductItems 
                        key={product.id} 
                        product={product} 
                        addToCart={addToCart} 
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;