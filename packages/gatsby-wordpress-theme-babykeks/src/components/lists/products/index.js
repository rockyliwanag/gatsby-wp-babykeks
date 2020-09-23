import React from 'react';
import { isEmpty } from 'lodash';
// import { getFormattedDate } from '../../../utils/functions';
import Link from 'gatsby-link';
import './styles.scss';
// import defaultImage from '../../../images/default/default.jpg';
import Img from 'gatsby-image';

const Product = ({ product }) => {
    // console.log("Product: ", product);
    if (isEmpty(product)) {
        return null;
    }

    return (

        <div className="featured-product-section" >
            {!isEmpty(product.images) ? (
                <div className="featured-product-section__img">
                    {console.log("images, ", product.images[0])}
                    <Img fluid={product.images[0].localFile.childImageSharp.fluid} alt={product.images[0].alt ? product.images[0].alt : product.title} />
                </div>
            ) : (
                    <div className="featured-product-section__img">
                        {/* <img src={defaultImage} alt=-product default" /> */}
                    </div>
                )}
            <div className="featured-product-section__content">
                {product.name ? (
                    <h3 dangerouslySetInnerHTML={{ __html: product.name }} />
                ) : null}
                {/* {product.short_description ? (
                    <div className="featured-product-section__excerpt" dangerouslySetInnerHTML={{ __html: product.short_description }} />
                ) : null} */}
                {product.short_description ? (
                    <p dangerouslySetInnerHTML={{ __html: product.short_description }} />
                ) : null}
                {/* <div className="featured-product-section__meta">
                    {product.excerpt ? (
                        <span className="featured-product-section__date"
                            dangerouslySetInnerHTML={{ __html: product.excerpt }} />
                    ) : null} */}
                <Link
                    className="featured-product-section__read-more"
                    to={product.uri}
                >
                    Read More ₱
					</Link>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Product;