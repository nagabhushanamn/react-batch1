import React from 'react'


function renderCatItems(cart) {
    return cart.map((item, idx) => {
        return (
            <tr key={idx}>
                <td>{item.name}</td>
                <td>&#8377;{item.price}</td>
                <td>{1}</td>
                <td>&#8377;{item.price * 1}</td>
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
            </div>
        </div>
    );
}

export default Viewcart;