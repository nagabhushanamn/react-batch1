import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Greeting extends Component {

    constructor(props) {
        super(props);
        console.log('Greeting::constructor()');
    }

    componentDidMount() {
        this.interaval = setInterval(() => {
            //this.forceUpdate();
        }, 100);
    }

    render() {
        console.log('Greeting::render()');
        let { message } = this.props;
        let timeNow = new Date().toLocaleTimeString();
        return (
            <div className="alert alert-info">
                {message}
                <hr />
                {timeNow}
            </div>
        );
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Greeting::shouldComponentUpdate()');
        if (this.props.message === nextProps.message) return false; else return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Greeting::componentDidUpdate()');
    }


    componentWillUnmount() {
        console.log('Greeting::componentWillUnmount()');
        clearInterval(this.interaval);
    }

}
Greeting.propTypes = {
    message: PropTypes.string
}
Greeting.defaultProps = {
    message: 'greetings'
};
export default Greeting;

