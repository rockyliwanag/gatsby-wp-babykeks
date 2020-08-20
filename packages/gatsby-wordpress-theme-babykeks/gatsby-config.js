require('dotenv').config();

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
                api: 'babykeksbakes.com',
                // true if using https. false otherwise.
                https: false,
                api_keys: {
                    consumer_key: `${process.env.CONSUMER_KEY}`,
                    consumer_secret: `${process.env.CONSUMER_SECRET}`,
                },
                // Array of strings with fields you'd like to create nodes for...
                fields: ['products', 'products/categories', 'products/attributes'],
                api_version: 'wc/v3',
                per_page: 20,
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