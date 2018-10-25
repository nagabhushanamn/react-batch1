import React from 'react';
import PropTypes from 'prop-types';

function renderStars(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(<i className="fa fa-star" key={i}></i>)
    }
    return arr;
}

let Review = (props) => {
    // let { review } = props
    //or
    let review = props.review
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="alert alert-info">
                    <span style={{ color: "red" }}>{renderStars(review.stars)}</span> &mdash; {review.author}
                    <hr />
                    <p>{review.body}</p>
                </div>
            </div>
        </div>
    );
}

Review.propTypes = {
    review: PropTypes.object.isRequired
}

export default Review;