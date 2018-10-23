import React from 'react'
import '../style/index.css';

const AddCartItem = (props) => {
    const AddedItem = props.products.map(product => {
        return (
            <option>{product.name}</option>
        )
    })
    return (
            <div className="form-group selectList">
                <label id="sel1">Select list:</label>
                <select onChange={props.onChangeValue} className="form-control" id="sel1">
                    {AddedItem}
                </select>
                <input onChange={props.onChangeQuantity} className="quantityBox" type="number" placeholder="Quantity"/>
                <button onClick={props.onSubmitAdd} className="submitButton">Submit</button>
            </div>
    )
}

export default AddCartItem;
