import React from 'react'

class Product extends React.Component {
    render() {
        console.log("Product props:") 
        console.log(this.props)
        return (
            <div class="ProductsList">
                {this.props.products.map((product) =>(
                    <div claas="ProductCss">
                        <h3> Name: {product.name} </h3>
                        <p> Price: {product.price} </p>
                        <p> Description: {product.description} </p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Product