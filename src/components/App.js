import React, { Component } from 'react';
import CartFooter from './CartFooter';
import CartItems from './CartItems';
import '../style/App.css';

class App extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-dark bg-primary">
                <a className="navbar-brand" href="#">Shopping Cart</a>
            </nav>
            <CartItems />
            <CartFooter />
            </div>
        );
    }
}

export default App;
