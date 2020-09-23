import React from 'react';
import Layout from '../../components/layouts';
import Error from '../../components/error';
import Hero from '../../components/home/hero';
import FeatReviews from '../../components/home/feat-reviews';
import FeatProducts from '../../components/home/feat-products';
import { isEmpty } from 'lodash';

const FrontPageTemplate = (props) => {

    console.log('home props, ', props);
    const {
        pageContext: {
            page: { frontPageMeta: { banner, featuredReviewsSection } },
            products,
        }
    } = props;

    return (
        <Layout>
            {!isEmpty(props.pageContext) ? (
                <>
                    <Hero data={banner} />
                    <FeatProducts data={products} />
                    <FeatReviews data={featuredReviewsSection} />
                </>
            ) : <Error message="Something went wrong!" />}
        </Layout>
    )
}

export default FrontPageTemplate;