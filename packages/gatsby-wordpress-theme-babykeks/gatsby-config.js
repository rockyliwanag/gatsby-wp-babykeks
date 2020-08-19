module.exports = ({
    wordPressUrl
}) => ({
    siteMetadata: {
        title: `Gatsby WordPress Theme`,
        description: `Gatsby WordPress Theme`,
        author: `Rocky Liwanag`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Gatsby WordPress Theme`,
                short_name: `babykeks`,
                start_url: `/`,
                background_color: `#aa9364`,
                theme_color: `#efd092`,
                display: `minimal-ui`,
                icon: `${__dirname}/src/images/favicon.png`, // For favicon- This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-source-graphql`,
            options: {
                // This type will contain remote schema Query type
                typeName: `hwgraphql`,
                // This is field under which it's accessible
                fieldName: `HWGraphQL`,
                // Url to query from
                url: `${wordPressUrl}/graphql`,
                refetchInterval: 6000,
            },
        },
        {
            resolve: `@pasdo501/gatsby-source-woocommerce`,
            options: {
                // Base URL of WordPress site
                api: 'http://babykeksbakes.com',
                // true if using https. false otherwise.
                https: false,
                api_keys: {
                    consumer_key: `ck_bc3995ef65a5ad2e61b5fe84d24a50b1a44ac77e`,
                    consumer_secret: `cs_8c86e99f8e84d17dc38686893f0508740ca616a1`,
                },
                // Array of strings with fields you'd like to create nodes for...
                fields: ['products', 'products/categories', 'products/attributes'],
            }
        },
        {
            resolve: 'gatsby-plugin-graphql-image',
            options: {
                schemaName: "hwgraphql",
                imageFieldName: "sourceUrl"
            }
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
});