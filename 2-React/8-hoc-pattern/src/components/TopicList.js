import React, { Component } from 'react';
import { connect } from '../hoc'

class TopicList extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         topics: []
    //     }
    // }

    // componentDidMount() {
    //     let topics = store.getTopics()
    //     this.setState({ topics })
    // }

    // componentWillUnmount() {
    //     //..
    // }

    // commonHandleLogic(){
    //     //
    // }

    render() {
        let { data: topics } = this.props
        return (
            <div className="alert alert-info">
                <ul className="list-group">
                    {topics.map((topic, idx) => <li key={idx} className="list-group-item">{topic}</li>)}
                </ul>
            </div>
        );
    }
}

export default connect(TopicList, store => store.getTopics());