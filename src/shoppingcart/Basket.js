import React from 'react';

export default class Basket extends React.Component {
    render(){
        const {cartItems} = this.props
        return (
            <div className="alert alert-info">
                {cartItems.length===0 ? "basket is empty": <div>"You have " + {cartItems.length} 
                    + " products in the basket"</div>}
            </div>
        )
    }
}