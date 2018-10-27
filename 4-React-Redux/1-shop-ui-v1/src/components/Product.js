
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Review from './Review';
import ReviewForm from './ReviewForm';

import { loadReviews, submitNewReview } from '../actions/reviews';
import {buy} from '../actions/cart'

import store from '../store';

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: 1,
            reviews: []
        }
    }
    componentDidMount() {
        let product = this.props.value;
        store.subscribe(() => {
            console.log('Product component : subscribing reviews');
            let reviews = store.getState().reviews[product.id] || [];
            this.setState({ reviews })
        })
    }
    addNewReview(review) {
        let product = this.props.value;
        store.dispatch(submitNewReview(review, product.id))
    }
    changeTab(idx, e) {
        e.preventDefault();
        this.setState({ tab: idx }, () => {
            let product = this.props.value;
            store.dispatch(loadReviews(product.id));
        });
    }
    handleBuy(){
        let item=this.props.value;
        store.dispatch(buy(item))
    }
    renderBuyBtn(product) {
        if (product.canBuy) return (<button onClick={e => this.handleBuy()} className="btn btn-sm btn-primary">buy</button>)
        else return null
    }
    renderReviews() {
        let { reviews } = this.state;
        return reviews.map((rev, idx) => {
            return <Review review={rev} key={idx} />
        })
    }
    renderTabPanel(product) {
        let { tab } = this.state;
        switch (tab) {
            case 1: return (<div>{product.description}</div>)
            case 2: return (<div>Not Yet</div>)
            case 3: return (
                <div>
                    {this.renderReviews()}
                    <hr />
                    <ReviewForm onNewReview={review => this.addNewReview(review)} />
                </div>
            )
            default: return null;
        }
    }
    render() {
        // let { value: product } = this.props;
        // or
        let product = this.props.value;
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
                                    <a className={tab === 1 ? 'nav-link active' : 'nav-link'} onClick={e => this.changeTab(1, e)} href="/">Description</a>
                                </li>
                                <li className="nav-item">
                                    <a className={classNames('nav-link', { active: tab === 2 })} onClick={e => this.changeTab(2, e)} href="/">Specification</a>
                                </li>
                                <li className="nav-item">
                                    <a className={classNames('nav-link', { active: tab === 3 })} onClick={e => this.changeTab(3, e)} href="/">Reviews</a>
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