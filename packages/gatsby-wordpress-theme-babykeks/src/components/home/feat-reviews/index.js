import React from 'react';
// import Link from 'gatsby-link';
// import BackgroundImage from 'gatsby-background-image';
import { isEmpty } from 'lodash';
import './styles.scss';

const FeatReviews = (props) => {
    const { title, content, image, date } = props.data;
    console.log(props.data);
    return !isEmpty(props.data) ? (
        <div className="hero-section">
            {/* <div className="hero-image"> */}
                Reviews
            {/* </div> */}

        </div>
    ) : null;


};

export default FeatReviews;