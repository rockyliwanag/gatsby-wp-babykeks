import React from 'react';
import { isEmpty } from 'lodash';
// import { getFormattedDate } from '../../../utils/functions';
import Link from 'gatsby-link';
// import './style.scss';
// import defaultImage from '../../../images/default/default.jpg';
// import Img from 'gatsby-image';

const Product = ({ product }) => {
    console.log("Product: ", product);
    if (isEmpty(product)) {
        return null;
    }

    return (

        <div className="featured-post-section" >
            {!isEmpty(product.images) ? (
                <div className="featured-post-section__img">
                    {/* <Img fluid={product.featuredImage.node.sourceUrlSharp.childImageSharp.fluid} alt={product.altText ? product.altText : product.title} /> */}
                </div>
            ) : (
                    <div className="featured-post-section__img">
                        {/* <img src={defaultImage} alt="Post default" /> */}
                    </div>
                )}
            <div className="featured-post-section__content">
                {product.name ? (
                    <h3 dangerouslySetInnerHTML={{ __html: product.name }} />
                ) : null}
                {/* {product.short_description ? (
                    <div className="featured-post-section__excerpt" dangerouslySetInnerHTML={{ __html: product.short_description }} />
                ) : null} */}
                {product.short_description ? (
                    <p dangerouslySetInnerHTML={{ __html: product.short_description }} />
                ) : null}
                {/* <div className="featured-post-section__meta">
                    {product.excerpt ? (
                        <span className="featured-post-section__date"
                            dangerouslySetInnerHTML={{ __html: product.excerpt }} />
                    ) : null} */}
                <Link
                    className="featured-post-section__read-more"
                    to={product.uri}
                >
                    Read More
					</Link>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Product;