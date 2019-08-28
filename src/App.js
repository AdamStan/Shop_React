import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopMenu from './topmenu/TopMenu'
import Product from './products/Product'
import Basket from './shoppingcart/Basket'
import MakeOrder from './shoppingcart/MakeOrder'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { items: [], itemsInBasket: [], showBasket: true, showCheckoutPage:false };
    this.getFromUrl = this.getFromUrl.bind(this)
    this.handleAddToCart = this.handleAddToCart.bind(this)
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this)
    this.handleCheckoutOrder = this.handleCheckoutOrder.bind(this)
    this.handleMakeAnOrder = this.handleMakeAnOrder.bind(this)
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
        <div className="row">
          <div className="col-8">
            <h2> In our offer: </h2>
            <Product products={this.state.items} handleAddToCart={this.handleAddToCart}/>
          </div>
          {this.state.showBasket && <div className="col-4">
            <Basket cartItems={this.state.itemsInBasket} handleRemoveFromCart={this.handleRemoveFromCart} 
                    handleCheckoutOrder={this.handleCheckoutOrder} />
          </div>}
          {this.state.showCheckoutPage && <div className="col-4">
            <MakeOrder handleMakeAnOrder={this.handleMakeAnOrder}/>
          </div>}
        </div>
        
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

  handleCheckoutOrder(event) {
    console.log("Here I am")
    this.setState({ showBasket: false, showCheckoutPage: true })
  }

  handleMakeAnOrder(event, city, street, numberOfBuilding, postalCode, email) {
    event.preventDefault()
    fetch('http://localhost:8080/order/make', {
        method: "POST",
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          city: city,
          street: street,
          numberOfBuilding: numberOfBuilding,
          postalCode: postalCode,
          email: email,
          itemsInBasket: this.state.itemsInBasket
        })
    })
    localStorage.setItem('cartItems', JSON.stringify([]))
    this.setState({
      showBasket: true,
      showCheckoutPage: false,
      itemsInBasket: []
    })
    alert("Your order was created!")
  }
}

export default App;
