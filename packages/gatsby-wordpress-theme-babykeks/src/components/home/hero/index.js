import React from 'react';
import Link from 'gatsby-link';
import { isEmpty } from 'lodash';

const Hero = (props) => {
    const { title, description, image, pageLinkText, pageLink } = props.data;
    return !isEmpty(props.data) ? (
        <div className="hero-wrapper">
            <div className="hero">
                {title ? (<h2>{title}</h2>) : null}
                {description ? (
                    <p className="hero-section__description">
                        {description}
                    </p>
                ) : null}
                {isEmpty(pageLink) ? (
                    <Link to="/blog/">
                        <button className="button-secondary">{pageLinkText}</button>
                    </Link>
                ) : (
                        <Link to={!isEmpty(pageLink.uri) ? pageLink.uri : '/blog/'}>
                            <button className="button-secondary">{pageLinkText}</button>
                        </Link>
                    )}
            </div>
        </div>
    ) : null;

};

export default Hero;