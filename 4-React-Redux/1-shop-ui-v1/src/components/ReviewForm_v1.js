import React, { Component } from 'react';

class ReviewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFormOpen: false
        }
    }
    toggleForm() {
        let { isFormOpen } = this.state;
        this.setState({ isFormOpen: !isFormOpen })
    }
    handleForm(e) {
        e.preventDefault();
        let stars = this.refs.stars.value;
        let author = this.refs.author.value;
        let body = this.refs.body.value;
        let review = { stars, author, body };
        let { onNewReview } = this.props;
        onNewReview(review)
        this.toggleForm();

    }
    renderForm() {
        let { isFormOpen } = this.state;
        if (!isFormOpen) return (<button className="btn btn-info" onClick={e => this.toggleForm()}><i className="fa fa-plus"></i></button>)
        else return (
            <div className="card card-default">
                <div className="card-header">Review Form</div>
                <div className="card-body">
                    <form onSubmit={e => this.handleForm(e)}>
                        <div className="form-group">
                            <label>stars</label>
                            <select className="form-control" ref="stars">
                                {[1, 2, 3, 4, 5].map((n, idx) => <option key={idx}>{n}</option>)}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>author</label>
                            <input className="form-control" ref="author" />
                        </div>
                        <div className="form-group">
                            <label>body</label>
                            <textarea className="form-control" ref="body"></textarea>
                        </div>
                        <button className="btn btn-dark">submit</button>&nbsp;
                        <button type="button" className="btn btn-danger" onClick={e => this.toggleForm()}>cancel</button>
                    </form>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div className="row">
                <div className="col-12 col-sm-10 col-md-10">
                    {this.renderForm()}
                </div>
            </div>
        );
    }
}

export default ReviewForm;