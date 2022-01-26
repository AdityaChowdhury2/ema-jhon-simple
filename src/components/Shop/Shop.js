import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Carte from '../Carte/Carte';
import Product from '../Product/Product';
import './shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([])

    const handleAddProduct = (product) => {
        // console.log("Product added", product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                <ul>
                    {
                        products.map(product => <Product handleAddProduct={handleAddProduct} product={product} />)
                    }
                </ul>
            </div>
            <div className="cart-container">
                <Carte cart={cart}></Carte>

            </div>
        </div>
    );
};

export default Shop;