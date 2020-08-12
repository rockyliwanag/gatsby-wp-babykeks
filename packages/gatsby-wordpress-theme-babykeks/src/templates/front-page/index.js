import React from 'react';
import Layout from '../../components/layouts';
import Error from '../../components/error';
import Hero from '../../components/home/hero';
import { isEmpty } from 'lodash';

const FrontPageTemplate = (props) => {
    console.warn(props);

    const {
        pageContext: {
            page: { frontPageMeta: { banner, featuredPostsSection } },
            posts
        }
    } = props;

    return (
        <Layout>
            {!isEmpty(props.pageContext) ? (
                <>
                    <Hero data={banner} />
                </>
            ) : <Error message="Something went wrong!" />}
        </Layout>
    )
}

export default FrontPageTemplate;