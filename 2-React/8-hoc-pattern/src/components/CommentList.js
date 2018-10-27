import React, { Component } from 'react';

import { connect } from '../hoc'

class CommentList extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         comments: []
    //     }
    // }

    // componentDidMount() {
    //     let comments = store.getComments()
    //     this.setState({ comments })
    // }

    // componentWillUnmount() {
    //     //..
    // }

    // commonHandleLogic(){
    //     //
    // }

    render() {
        let { data: comments } = this.props
        return (
            <div className="alert alert-danger">
                <ul className="list-group">
                    {comments.map((comment, idx) => <li key={idx} className="list-group-item">{comment}</li>)}
                </ul>
            </div>
        );
    }
}

export default connect(CommentList, store => store.getComments());