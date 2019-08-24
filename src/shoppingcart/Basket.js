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
        event.preventDefault()
        this.state.handleRemoveFromCart()
    }

    render(){
        const {cartItems} = this.props
        return (
            <div className="alert alert-info">
                {cartItems.length===0 ? "basket is empty": <div>"You have " + {cartItems.length} 
                    + " products in the basket"</div> }
                {cartItems.length > 0 &&
                    <div>
                        <ul>
                            {cartItems.map(item =>
                                <li>
                                    <b> {item.name} </b>
                                    <button className="btn btn-danger" 
                                            onClick={(e) => this.removeFromCart(e, item)}>X</button>
                                </li>
                            )}
                        </ul>
                    </div>
                }
            </div>
        )
    }
}