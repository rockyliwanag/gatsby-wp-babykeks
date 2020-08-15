import React from 'react';
import { isEmpty } from 'lodash';
// import { getFormattedDate } from '../../../utils/functions';
import Link from 'gatsby-link';
// import './style.scss';
// import defaultImage from '../../../images/default/default.jpg';
import Img from 'gatsby-image';

const Review = ({ review }) => {

    if (isEmpty(review)) {
        return null;
    }

    return (

        <div className="featured-post-section" >
            {!isEmpty(review.featuredImage) ? (
                <div className="featured-post-section__img">
                    <Img fluid={review.featuredImage.node.sourceUrlSharp.childImageSharp.fluid} alt={review.altText ? review.altText : review.title} />
                </div>
            ) : (
                    <div className="featured-post-section__img">
                        {/* <img src={defaultImage} alt="Post default" /> */}
                    </div>
                )}
            <div className="featured-post-section__content">
                {review.title ? (
                    <h3 dangerouslySetInnerHTML={{ __html: review.title }} />
                ) : null}
                {review.content ? (
                    <div className="featured-post-section__excerpt" dangerouslySetInnerHTML={{ __html: review.content }} />
                ) : null}
                <div className="featured-post-section__meta">
                    {review.excerpt ? (
                        <span className="featured-post-section__date">

                            {review.excerpt}

                        </span>
                    ) : null}
                    <Link
                        className="featured-post-section__read-more"
                        to={review.uri}
                    >
                        Read More
					</Link>
                </div>
            </div>
            {console.log('This review, ', review)}
        </div>
    )
}

export default Review;