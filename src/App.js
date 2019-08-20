import React, { Component } from 'react';
import './App.css';
import TopMenu from './topmenu/TopMenu'
import Product from './products/Product'
import Basket from './shoppingcart/Basket'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { items: [], itemsInBasket: [] };
    this.getFromUrl = this.getFromUrl.bind(this)
    this.handleAddToCart = this.handleAddToCart.bind(this)
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this)
  }

  componentDidMount() {
    fetch('http://localhost:8080/items/all')
    .then(res => res.json())
    .then((data) => {
      this.setState({ items: data })
      console.log(this.state.items)
    })
    .catch(console.log)
  }
  
  render(){
    return (
      <div className="App">
        <TopMenu updateFromUrl={this.getFromUrl} />
        <Basket cartItems={this.state.itemsInBasket} handleRemoveFromCart={this.handleRemoveFromCart} />
        <h2> In our offer: </h2>
        <Product products={this.state.items} handleAddToCart={this.handleAddToCart}/>
      </div>
    );
  }

  getFromUrl(urlAddress){
    fetch(urlAddress)
    .then(res => res.json())
    .then((data) => {
      this.setState({ items: data })
      console.log(this.state.items)
    })
    .catch(console.log)
  }

  handleRemoveFromCart(){

  }

  handleAddToCart(event, product) {
    this.setState(state=>{
      const cartItems = state.itemsInBasket
      let productAlreadyInCart = false
      cartItems.forEach(element => {
        if(element.id === product.id){
          productAlreadyInCart=true;
          element.count++;
        }
      })
      if(!productAlreadyInCart){
        cartItems.push({...product, count:1})
      }
      return cartItems
    })
  }

}

export default App;
