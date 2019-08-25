import React from 'react';

export default class Basket extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            handleRemoveFromCart: props.handleRemoveFromCart
        }
        this.removeFromCart = this.removeFromCart.bind(this)
    }

    removeFromCart(event, product) {
        this.state.handleRemoveFromCart(event, product)
    }

    render(){
        const {cartItems} = this.props
        return (
            <div className="alert alert-info">
                {cartItems.length===0 ? "basket is empty": <div>You have {cartItems.length} products in the basket</div> }
                {cartItems.length > 0 &&
                    <div>
                        <ul>
                            {cartItems.map(item =>
                                <li>
                                    <b> {item.name} x{item.count} = {item.price * item.count} </b>
                                    <button className="btn btn-danger" 
                                            onClick={(e) => this.removeFromCart(e, item)}>X</button>
                                </li>
                            )}
                        </ul>
                        <p>Total price: {cartItems.reduce((a, c) => a + c.price*c.count, 0)}</p>
                        <button className="btn btn-warning" onClick={(e) => this.props.handleCheckoutOrder(e)}> Checkout </button>
                    </div>
                }
            </div>
        )
    }
}