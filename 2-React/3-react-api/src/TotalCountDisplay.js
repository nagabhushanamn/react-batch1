import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TotalCountDisplay extends Component {
    render() {
        return (
            <div className="alert alert-warning">
                Total Count : <span className="badge badge-danger">{this.props.value}</span>
            </div>
        );
    }
}

TotalCountDisplay.propTypes = {
    value: PropTypes.number
};

export default TotalCountDisplay;