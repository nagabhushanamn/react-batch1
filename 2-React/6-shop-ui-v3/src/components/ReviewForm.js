import React, { Component } from 'react';

class ReviewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFormOpen: false,
            stars: 5,
            author: 'nag@email.com',
            body: ''
        }
    }
    toggleForm() {
        let { isFormOpen } = this.state;
        this.setState({ isFormOpen: !isFormOpen })
    }
    handleChange(e) {
        let fieldId = e.target.id;
        let fieldValue = e.target.value;
        this.setState({ [fieldId]: fieldValue })
    }
    handleForm(e) {
        e.preventDefault();
        let { stars, author, body } = this.state;
        let review = { stars, author, body };
        let { onNewReview } = this.props;
        onNewReview(review)
        this.toggleForm();
    }
    isValidForm() {
        let { stars } = this.state;
        if (stars < 4) return true
        return false
    }
    renderForm() {
        let { isFormOpen, stars, author, body } = this.state;
        if (!isFormOpen) return (<button className="btn btn-info" onClick={e => this.toggleForm()}><i className="fa fa-plus"></i></button>)
        else return (
            <div className="card card-default">
                <div className="card-header">Review Form</div>
                <div className="card-body">
                    <form onSubmit={e => this.handleForm(e)}>
                        <div className="form-group">
                            <label>stars</label>
                            <select className="form-control" id="stars" value={stars} onChange={e => this.handleChange(e)}>
                                {[1, 2, 3, 4, 5].map((n, idx) => <option key={idx}>{n}</option>)}
                            </select>
                            <span className="text text-danger">{stars < 4 ? "please give more stars" : null}</span>
                        </div>
                        <div className="form-group">
                            <label>author</label>
                            <input className="form-control" id="author" value={author} onChange={e => this.handleChange(e)} />
                        </div>
                        <div className="form-group">
                            <label>body</label>
                            <textarea className="form-control" id="body" value={body} onChange={e => this.handleChange(e)}></textarea>
                        </div>
                        <button className="btn btn-dark" disabled={this.isValidForm()}>submit</button>&nbsp;
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