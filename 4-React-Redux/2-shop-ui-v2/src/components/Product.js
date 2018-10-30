
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Review from './Review';
import ReviewForm from './ReviewForm';

import { loadReviews, submitNewReview } from '../actions/reviews';
import { buy } from '../actions/cart'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: 1,
        }
    }
    addNewReview(review) {
        let product = this.props.value;
        let { actions } = this.props;
        actions.submitNewReview(review, product.id);
    }
    changeTab(idx, e) {
        e.preventDefault();
        this.setState({ tab: idx }, () => {
            if (idx === 3) {
                let product = this.props.value;
                let { actions } = this.props;
                actions.loadReviews(product.id)
            }
        });
    }
    handleBuy() {
        let item = this.props.value;
        let { actions } = this.props;
        actions.buy(item)
    }
    renderBuyBtn(product) {
        if (product.canBuy) return (<button onClick={e => this.handleBuy()} className="btn btn-sm btn-primary">buy</button>)
        else return null
    }
    renderReviews() {
        let { reviews } = this.props;
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


function mapStateToProps(state, props) {
    let product = props.value
    return {
        reviews: state.reviews[product.id] || []
    }
}
function mapDispatchToProps(dispatch) {
    let actions = { loadReviews, submitNewReview, buy }
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);