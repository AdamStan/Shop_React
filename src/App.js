import React, { Component } from 'react';
import './App.css';
import TopMenu from './topmenu/TopMenu'
import Product from './products/Product'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    fetch('http://localhost:8080/items/all')
    .then(res => res.json())
    .then((data) => {
      this.setState({ items: data })
      console.log(this.state.items)
      this.forceUpdate()
    })
    .catch(console.log)
  }
  
  render(){
    return (
      <div className="App">
        <TopMenu/>
        <h2> In our offer: </h2>
        <Product products={this.state.items} />
      </div>
    );
  }
}

export default App;
