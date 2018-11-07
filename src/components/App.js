import React, { Component } from 'react';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import CartItems from './CartItems';
import CartItem from './CartItem';
import Total from './Total';
import AddItem from './AddItem';
import '../style/App.css';

class App extends Component {
    constructor(props){
        super(props)
            this.state ={
                cartItemList : [
                  { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
                  { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
                  { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
                ],
                products : [
                  { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
                  { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
                  { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
                  { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
                  { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
                  { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
                  { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
                  { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
                  { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
                ],
                value: "",
                quantity: 0,
                total: 33.96,
    }
}
            onChangeValue = (event) => {
                this.setState({value: event.target.value})
             }

             onChangeQuantity = (event) => {
                this.setState({quantity: event.target.value})
             }
             onSubmitAdd = (event) => {
                event.preventDefault()

                const price = this.state.products.filter( product => {
                    if (this.state.value === product.name){
                        this.state.total += product.priceInCents * this.state.quantity
                        return product.priceInCents
                    }
                })

             var newItem = {
                id: this.state.cartItemList.length +1,
                product: {
                    id: 40,
                    name: this.state.value,
                    priceInCents: price[0].priceInCents
                },
                quantity: this.state.quantity
             }
                this.setState({
                    cartItemList: [...this.state.cartItemList, newItem]
                })
             }

    render() {
        return (
            <div>
                <CartHeader />
                <CartItems cartItemList = {this.state.cartItemList} />
                <AddItem onSubmitAdd={this.onSubmitAdd} onChangeQuantity={this.onChangeQuantity} onChangeValue={this.onChangeValue} products={this.state.products} />
                <Total cartItemList = {this.state.cartItemList}/>
                <CartFooter copyright="&copy; 2018" /> 
            </div>
        );
    };
}

export default App;
