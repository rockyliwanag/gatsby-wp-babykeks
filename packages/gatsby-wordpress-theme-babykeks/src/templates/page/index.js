import React from 'react';
import Layout from '../../components/layouts';

const PageTemplate = (props) => {
    console.log('props', props);
    return (
        <Layout>
            <div>My Page</div>
        </Layout>
    )
};

export default PageTemplate;