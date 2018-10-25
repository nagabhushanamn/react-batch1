import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Product from './components/Product';
import Viewcart from './components/ViewCart';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCartOpen: false,
      cart: [],
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

  toggleCart(e) {
    e.preventDefault()
    let { isCartOpen } = this.state;
    this.setState({ isCartOpen: !isCartOpen })
  }

  addToCart(item, qty) {
    let { cart } = this.state;
    cart = cart.concat(item)
    this.setState({ cart });
  }

  renderProducts() {
    let { isCartOpen, cart } = this.state;
    if (isCartOpen) return <Viewcart cart={cart} />
    else {
      let { products } = this.state;
      return products.map((p, idx) => {
        return (
          <Product value={p} onBuy={item => this.addToCart(item)} key={idx} />
        )
      })
    }
  }
  render() {
    let { cart, isCartOpen } = this.state;
    return (
      <div className="container">
        <Router>
          <div>
            <NavBar title="online-shopping" />
            <hr />
            <i className="fa fa-shopping-cart"></i> &nbsp;
            <span className="badge badge-primary">{cart.length}</span> item(s) in cart
            &nbsp;
            |
            &nbsp;
            <a href="/" onClick={e => this.toggleCart(e)}>{isCartOpen ? 'View products' : "View cart"}</a>
            <hr />
            {this.renderProducts()}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
