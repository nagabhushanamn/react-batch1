import React, { Component } from 'react';
import PropTypes from 'prop-types'

class C extends Component {
    render() {
        return (
            <div>
                <div className="card card-default">
                    <div className="card-body">
                        <span className="badge badge-dark">C component</span>
                        <hr />
                        {this.context.value}
                    </div>
                </div>
            </div>
        );
    }
}
C.contextTypes = {
    value: PropTypes.number
};

export default C;