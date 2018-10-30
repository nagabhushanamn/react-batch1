import React, { Component } from 'react';
import { connect } from 'react-redux'
class CartBadge extends Component {
    render() {
        let { cart } = this.props;
        return (
            <div>
                <i className="fa fa-shopping-cart"></i> &nbsp;
                <span className="badge badge-primary">{cart.length}</span> item(s) in cart
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}
export default connect(mapStateToProps, null)(CartBadge);