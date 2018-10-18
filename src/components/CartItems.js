import React from 'react';
import '../style/index.css';
import CartItem from './CartItem';

const CartItems = (props) => {
    return (
        <div className="container">
            <h1>Cart Items</h1>
            <div className="list-group">
                <div className="list-group-item">
                    <div className="row">
                        <div className="col-md-8"><h4>Product</h4></div>
                        <div className="col-md-2"><h4>Price</h4></div>
                        <div className="col-md-2"><h4>Quantity</h4></div>
                    </div>
                <CartItem cartItemList = {props.cartItemList} />
                </div>
            </div>
        </div>
    );
}

export default CartItems;
