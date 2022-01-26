import React from 'react';
import './carte.css'

const Carte = (props) => {
    const cart = props.cart;
    // console.log(cart)
    const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    let shipping = 0;
    if (totalPrice > 650) {
        shipping = 0;
    }
    else if (totalPrice > 350) {
        shipping = 4.99;
    }
    else if (totalPrice > 150) {
        shipping = 8.99;
    }
    else if (totalPrice > 0) {
        shipping = 12.99;
    }
    const tax = totalPrice * (18 / 100);
    const grandTotal = (totalPrice + shipping + tax);
    const formatNumber = num => Number(num).toFixed(2);
    return (
        <div>
            <div className='cart-heading'>
                <h3>This is cart</h3>
                <h5>Items Ordered: {cart.length}</h5>
                <p><small>Shipping Cost: {shipping}</small></p>
                <p><small>Product Price: {formatNumber(totalPrice)}</small></p>
                <p><small>Tax + VAT: {formatNumber(tax)}</small></p>
                <p><small>Total price: {formatNumber(grandTotal)}</small></p>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Carte;