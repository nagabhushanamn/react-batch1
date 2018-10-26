import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Product from './components/Product';
import Viewcart from './components/ViewCart';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './components/Home';


const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      products: []
    }
  }

  componentDidMount() {
    let api = "http://0.0.0.0:8080/api/products";
    // using XHR/fetch API
    fetch(api)
      .then(response => response.json())
      .then(products => this.setState({ products }))
  }

  addToCart(item, qty) {
    let { cart } = this.state;
    cart = cart.concat(item)
    this.setState({ cart });
  }

  renderProducts() {
    let { products } = this.state;
    return products.map((p, idx) => {
      return (
        <Product value={p} onBuy={item => this.addToCart(item)} key={idx} />
      )
    })
  } 
  render() {
    let { cart } = this.state;
    return (
      <div className="container" >
        <Router>
          <div>
            <NavBar title="online-shopping" />
            <hr />
            <i className="fa fa-shopping-cart"></i> &nbsp;
            <span className="badge badge-primary">{cart.length}</span> item(s) in cart
            <hr />
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link" to="products">View products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="cart">View cart</Link>
              </li>
            </ul>
            <hr />

            <Switch>
              <Route path={"/"} exact={true} component={Home} />
              <Route path={"/products"} render={() => this.renderProducts()} />
              <Route path={"/cart"} render={() => <Viewcart cart={cart} />} />
              <Route exact={true} component={NoMatch} />
            </Switch>

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
