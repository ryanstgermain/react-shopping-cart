import React, { Component } from 'react';
import '../style/index.css';

const CartFooter = (props) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">{props.copyright}</a>
        </nav>
    );
}

export default CartFooter;
