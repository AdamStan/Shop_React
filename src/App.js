import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    if(localStorage.getItem('cartItems')){
      this.setState( {itemsInBasket: JSON.parse(localStorage.getItem('cartItems'))} )
    }
  }
  
  render(){
    return (
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <TopMenu updateFromUrl={this.getFromUrl} />
        </nav>
        <div>
          <Basket cartItems={this.state.itemsInBasket} handleRemoveFromCart={this.handleRemoveFromCart} />
        </div>
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

  handleRemoveFromCart(e, product){
    this.setState(state=>{
      const itemsInBasket = state.itemsInBasket.filter(element => element.id !== product.id)
      localStorage.setItem('cartItems', JSON.stringify(itemsInBasket))
      return {itemsInBasket}
    })
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
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
      return cartItems
    })
  }

}

export default App;
