
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: 1
        }
    }
    changeTab(idx) {
        this.setState({ tab: idx });
    }
    renderBuyBtn(product) {
        if (product.canBuy) return (<button className="btn btn-sm btn-primary">buy</button>)
        else return null
    }
    renderTabPanel(product) {
        let { tab } = this.state;
        switch (tab) {
            case 1: return (<div>{product.description}</div>)
            case 2: return (<div>Not Yet</div>)
            case 3: return (<div>None Yet</div>)
            default: return null;
        }
    }
    render() {
        // let { value: product } = this.props;
        // or
        let product=this.props.value;
        let { tab } = this.state;
        return (
            <div>
                <div className="list-group-item">
                    <div className="row">
                        <div className="col-3 col-sm-3 col-md-3">
                            <img src={product.image} alt="product" className="img-fluid" />
                        </div>
                        <div className="col-9 col-sm-9 col-md-9">
                            <h5>{product.name}</h5>
                            <h5>&#8377;{product.price}</h5>
                            {this.renderBuyBtn(product)}
                            <hr />
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className={tab === 1 ? 'nav-link active' : 'nav-link'} onClick={e => this.changeTab(1)} href="/#">Description</a>
                                </li>
                                <li className="nav-item">
                                    <a className={classNames('nav-link', { active: tab === 2 })} onClick={e => this.changeTab(2)} href="/#">Specification</a>
                                </li>
                                <li className="nav-item">
                                    <a className={classNames('nav-link', { active: tab === 3 })} onClick={e => this.changeTab(3)} href="/#">Reviews</a>
                                </li>
                            </ul>
                            {this.renderTabPanel(product)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    value: PropTypes.object
}

export default Product;