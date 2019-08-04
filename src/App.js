import React, { Component } from 'react';
import './App.css';
import TopMenu from './topmenu/TopMenu'

class App extends Component {
  componentDidMount() {
    fetch('http://localhost:8080/items/all')
    .then(res => res.json())
    .then((data) => {
      this.setState({ items: data })
    })
    .catch(console.log)
  }
  
  render(){
    return (
      <div className="App">
        <TopMenu/>
        <p> There will be application </p>
      </div>
    );
  }
}

export default App;
