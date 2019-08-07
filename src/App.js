import React, { Component } from 'react';
import './App.css';
import TopMenu from './topmenu/TopMenu'
import Product from './products/Product'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.getFromUrl = this.getFromUrl.bind(this)
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
        <TopMenu updateFromUrl={this.getFromUrl}/>
        <h2> In our offer: </h2>
        <Product products={this.state.items} />
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
}

export default App;
