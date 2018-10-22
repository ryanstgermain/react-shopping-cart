import React from 'react'
import '../style/index.css';

const AddCartItem = (props) => {
    const AddedItem = props.products.map(product => {
        return (
            <option>{product.name} - {product.priceInCents}</option>
        )
    })
    return (
            <div className="form-group">
                <label for="sel1">Select list:</label>
                <select className="form-control" id="sel1">
                    {AddedItem}
                </select>
                <input className="quantityBox" type="number" placeholder="Quantity"/>
            </div>
    )
}

export default AddCartItem;
