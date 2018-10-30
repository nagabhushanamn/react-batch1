import React, { Component } from 'react';
import NavBar from './components/NavBar';
import ViewCart from './components/ViewCart';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './components/Home';


import { connect } from 'react-redux'
import CartBadge from './components/CartBadge';
import ProductList from './components/ProductList';


const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

class App extends Component {

  render() {
    return (
      <div className="container" >
        <Router>
          <div>
            <NavBar title="online-shopping" />
            <hr />
            <CartBadge />
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
            <div className="alert alert-info">
              {this.props.status.message}
            </div>
            <Switch>
              <Route path={"/"} exact={true} component={Home} />
              <Route path={"/products"} component={ProductList} />
              <Route path={"/cart"} render={() => <ViewCart />} />
              <Route exact={true} component={NoMatch} />
            </Switch>

          </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    status: state.status
  }
}

export default connect(mapStateToProps, null)(App);
