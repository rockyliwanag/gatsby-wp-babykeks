import React from 'react';
import Layout from '../../components/layouts';
import Page from '../../components/page'

const PageTemplate = (props) => {
    console.log('props', props);
    return (
        <Layout>
            <Page data={props.pageContext} />
        </Layout>
    )
};

export default PageTemplate;