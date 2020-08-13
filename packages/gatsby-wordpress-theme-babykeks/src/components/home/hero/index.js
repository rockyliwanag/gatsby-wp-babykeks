import React from 'react';
import Link from 'gatsby-link';
import BackgroundImage from 'gatsby-background-image';
import { isEmpty } from 'lodash';
import './styles.scss';

const Hero = (props) => {
    const { title, description, image, pageLinkText, pageLink } = props.data;
    return !isEmpty(props.data) ? (
        <div className="hero-section">
            {/* <div className="hero-image"> */}
            <BackgroundImage style={{ position: '"static"', height: '100vh' }}
                fluid={image.sourceUrlSharp.childImageSharp.fluid}
                alt={image.altText ? image.altText : 'Banner'}
            >
                <div className="dark-BG">

                </div>
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
            </BackgroundImage>
            {console.log("BG Image, ", image)}
            {/* </div> */}
        </div>
    ) : null;

};

export default Hero;