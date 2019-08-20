import React from 'react'

class Product extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            handleAddToCart : props.handleAddToCart,
        }
        this.addToCart = this.addToCart.bind(this)
    }

    addToCart(event, product) {
        event.preventDefault()
        this.state.handleAddToCart(event, product)
    }

    render() {
        console.log("Product props:") 
        console.log(this.props)
        return (
            <div class="ProductsList">
                {this.props.products.map((product) =>(
                    <div claas="ProductCss">
                        <h3> Name: {product.name} </h3>
                        <p> Price: {product.price} PLN </p>
                        <p> Description: {product.description} </p>
                        <p> Creator: {product.creator.name} </p>
                        <button onClick={(e)=> this.addToCart(e, product)}> Add to cart </button>
                    </div>
                ))}
            </div>
        );
    }
}

export default Product