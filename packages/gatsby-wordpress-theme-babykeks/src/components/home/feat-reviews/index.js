import React from 'react';
// import config from '../../../../client-config';
import Link from 'gatsby-link';
import { isEmpty } from 'lodash';
import Review from '../../lists/post';
// import './style.scss';

const FeatReviews = (props) => {
    console.log("RevProp, ", props);
    const { featuredReviews, heading } = props.data;

    return !isEmpty(featuredReviews) ? (
        <div className="featured-Reviews-section">
            <div className="wrapper">
                <h2>
                    {!isEmpty(heading)
                        ? heading
                        : null}
                </h2>
                {!isEmpty(featuredReviews) ? (
                    <div className="featured-Reviews-section__wrap">
                        {featuredReviews.map(
                            (review) => (
                                <Review key={`${review.id}`} review={review} />
                            )
                        )}
                    </div>
                ) : null}
            </div>
            <div className="view-all-wrap">
                <Link to="/blog"><button>View All</button></Link>
            </div>
        </div>
    ) : (
            ''
        );
};

export default FeatReviews;