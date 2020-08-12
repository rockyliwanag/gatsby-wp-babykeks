const createAllPages = require('./create-pages/pages');
const createFrontPage = require('./create-pages/front-page');

exports.createPages = async ({ actions, graphql }) => {
    await createAllPages({ actions, graphql });
    await createFrontPage({ actions, graphql });
};