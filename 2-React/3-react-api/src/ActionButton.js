import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ActionButton.css';
class ActionButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hitCount: 0
        }
        //this.handleBtnClick = this.handleBtnClick.bind(this);
        console.log('ActionButton :: constructor()');
    }
    handleBtnClick() {
        let { hitCount } = this.state
        hitCount += 1
        this.setState({ hitCount })
        let { onHit, value } = this.props; // function property

        if (onHit) {
            let v = hitCount * value;
            onHit(v);
        }
    }
    render() {
        console.log('ActionButton :: render()');
        let { value } = this.props; // number property
        let { hitCount } = this.state;
        let className = `btn ${value < 0 ? 'btn-danger' : 'btn-success'}`
        return (
            <div className="action-button">
                <div className="card">
                    <div className="card-body">
                        <button className={className} onClick={e => this.handleBtnClick()}>{value}</button> =>
                        <span className="badge badge-danger">{hitCount}</span>
                    </div>
                </div>
            </div>
        );
    }
}

ActionButton.propTypes = {
    value: PropTypes.number.isRequired,
    onHit: PropTypes.func
}

export default ActionButton;
