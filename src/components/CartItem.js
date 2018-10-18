import React from 'react';
import '../style/index.css';

const CartItem = (props) => {
    const cartItemLol = props.cartItemList.map(item => {
        return (
            <div className="row">
                <div className="col-md-8">{item.product.name}</div>
                <div className="col-md-2">{"$" + item.product.priceInCents / 100}</div>
                <div className="col-md-2">{item.quantity}</div>
            </div>
        )
    })
        return (
            <div className="collection-item">{cartItemLol}</div>
        )
}
    

export default CartItem;
