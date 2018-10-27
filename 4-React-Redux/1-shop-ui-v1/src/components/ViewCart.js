import React from 'react'

import { buy } from '../actions/cart'
import store from '../store';

function handleBuy(item) {
    store.dispatch(buy(item))
}
function renderCatItems(cart) {
    return cart.map((item, idx) => {
        return (
            <tr key={idx}>
                <td>{item.name}</td>
                <td>&#8377;{item.price}</td>
                <td>{1}</td>
                <td>&#8377;{item.price * 1}</td>
                <td><span className="badge badge-primary" onClick={e => handleBuy(item)}><i className="fa fa-plus"></i></span></td>
                <td><span className="badge badge-primary"><i className="fa fa-minus"></i></span></td>
            </tr>
        )
    });
}
let Viewcart = props => {
    let { cart } = props;
    return (
        <div>
            <div className="card card-default"></div>
            <div className="card-header">Items in cart</div>
            <div className="card-body">
                <table className="table table-bordred table-sm">
                    <tbody>
                        {renderCatItems(cart)}
                    </tbody>
                </table>
                <hr />
                <button className="btn btn-primary">checkout</button>
            </div>
        </div>
    );
}

export default Viewcart;