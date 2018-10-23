import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Product from './components/Product';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 111,
          name: 'Laptop',
          price: 198000,
          description: 'New mac pro',
          canBuy: true,
          image: 'images/Laptop.png'
        },
        {
          id: 222,
          name: 'Mobile',
          price: 18000,
          description: 'New pro',
          canBuy: true,
          image: 'images/Mobile.png'
        }
      ]
    }
  }

  renderProducts() {
    let { products} = this.state;
    return products.map((p, idx) => {
      return (
        <Product value={p} key={idx}/>
      )
    })
  }
  render() {
    return (
      <div className="container">
        <NavBar title="online-shopping"/>
        <hr />
        <hr />
        {this.renderProducts()}
      </div>
    );
  }
}

export default App;
