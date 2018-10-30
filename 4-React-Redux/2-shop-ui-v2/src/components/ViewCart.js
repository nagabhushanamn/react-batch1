import React from 'react'

import { buy } from '../actions/cart'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

function handleBuy(item, props) {
    props.actions.buy(item)
}
function renderCatItems(cart, props) {
    return cart.map((item, idx) => {
        return (
            <tr key={idx}>
                <td>{item.name}</td>
                <td>&#8377;{item.price}</td>
                <td>{1}</td>
                <td>&#8377;{item.price * 1}</td>
                <td><span className="badge badge-primary" onClick={e => handleBuy(item, props)}><i className="fa fa-plus"></i></span></td>
                <td><span className="badge badge-primary"><i className="fa fa-minus"></i></span></td>
            </tr>
        )
    });
}
let ViewCart = props => {
    let { cart } = props;
    return (
        <div>
            <div className="card card-default"></div>
            <div className="card-header">Items in cart</div>
            <div className="card-body">
                <table className="table table-bordred table-sm">
                    <tbody>
                        {renderCatItems(cart, props)}
                    </tbody>
                </table>
                <hr />
                <button className="btn btn-primary">checkout</button>
            </div>
        </div>
    );
}

function mapStateToProps(state, props) {
    return {
        cart: state.cart
    }
}
function mapDispatchToProps(dispatch) {
    let actions = { buy }
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCart);