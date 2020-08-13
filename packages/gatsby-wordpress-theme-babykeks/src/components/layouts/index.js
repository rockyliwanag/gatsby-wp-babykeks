import React from 'react';
import PropTypes from 'prop-types';
import './../../sass/common.scss';

const Layout = ({ children, data }) => {
    return (
        <>
            {/* <Header data={data} /> */}
            <main className="main-container">{children}</main>
            {/* <Footer data={data} /> */}
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;