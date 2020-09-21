import React from 'react';
import Link from 'gatsby-link';
import { isEmpty } from 'lodash';
import Product from '../../lists/products';

const FeatProducts = (props) => {
    console.log("PROD, ", props);
    const edges = props.data;
    // console.log("NODE", node)
    return !isEmpty(edges) ? (
        <div className="featured-Reviews-section">
            <div className="wrapper">
                <h2>
                    Featured Products
                </h2>
                {!isEmpty(edges) ? (
                    <div className="featured-Reviews-section__wrap">
                        {edges.map(
                            (product) => (
                                <Product key={`${product.node.id}`} product={product.node} />
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
            'Nothing!'
        );

};

export default FeatProducts;