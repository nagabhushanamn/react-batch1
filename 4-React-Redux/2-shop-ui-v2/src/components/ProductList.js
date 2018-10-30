import React, { Component } from 'react';


import { loadProducts } from '../actions/products';
import { connect } from 'react-redux'
import Product from './Product';

class ProductList extends Component {
    componentDidMount() {
        this.props.loadProducts();
    }
    renderProducts() {
        let { products } = this.props;
        return products.map((p, idx) => {
            return (
                <Product value={p} key={idx} />
            )
        })
    }
    render() {
        return (
            <div>
                {this.renderProducts()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        loadProducts: () => { dispatch(loadProducts()) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
