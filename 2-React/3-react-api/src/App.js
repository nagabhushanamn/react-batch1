import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Greeting from './Greeting';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('App::constructor()');
    //console.log(props);

    this.state = {
      message: 'hello...'
    }

    // this.changeGreeting=this.changeGreeting.bind(this);

  }

  changeGreeting(message) {
    this.setState({ message });
  }

  render() {
    console.log('App::render()');

    // let title = this.props.title;
    // let by = this.props.by;
    // or
    let { title, by } = this.props; // de-structuring
    let { message } = this.state;
    return (
      <div className="container">

        <hr />
        <h1> {title}  : by {by}  </h1>
        <hr />
        <button className="btn btn-dark" onClick={this.changeGreeting.bind(this, 'good morning')}>GM</button>
        <button className="btn btn-dark" onClick={e => this.changeGreeting('good noon')}>GN</button>
        <button className="btn btn-dark" onClick={e => this.changeGreeting('goog evening')}>GE</button>
        <button className="btn btn-danger" onClick={e => this.changeGreeting('')}>Remove Greeting</button>
        <hr />

        {(message) ? <Greeting message={message} /> : null}

      </div>
    );
  }


  componentDidMount() {
    console.log('App::componentDidMount()');
    setTimeout(() => {
      let serverMessage = "";
      if (serverMessage)
        this.setState({ message: serverMessage });
    }, 3000);
  }

}


// define component's properties
App.propTypes = {
  title: PropTypes.string.isRequired,
  by: PropTypes.string
}
App.defaultProps = {
  by: 'Nag'
};

export default App;
