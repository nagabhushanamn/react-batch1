import React, { Component } from 'react';

class Box extends Component {
    renderChildren() {
        let { children } = this.props
        return children.map((child, idx) => {
            return (
                <div key={idx} className="list-group-item">
                    {child}
                </div>
            )
        })
    }
    render() {
        return (
            <div className="card card-primary">
                <div className="card-body">
                    {this.renderChildren()}
                </div>
            </div>
        );
    }
}

export default Box;