const { slash } = require('gatsby-core-utils');
const frontPageTemplate = require.resolve('../src/templates/front-page/index.js');

// Get all the front page data.
const GET_FRONT_PAGE = `
query GET_FRONT_PAGE {
  HWGraphQL {
    pageBy(uri: "/") {
      title
      frontPageMeta {
        fieldGroupName
        banner {
          fieldGroupName
          title
          description
          image {
            id
            altText
            sourceUrl
            sourceUrlSharp {
              childImageSharp {
                fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
          pageLink {
            ... on hwgraphql_Page {
              id
              uri
            }
          }
          pageLinkText
        }
        featuredReviewsSection {
          heading
          featuredReviews {
            ... on hwgraphql_Post {
              id
              title
              date
              excerpt(format: RENDERED)
              content
              uri
              ReviewMeta {
                reviews {
                  city
                  fieldGroupName
                  name
                  review
                  photo {
                    sourceUrl(size: MEDIUM)
                  }
                }
              }
              featuredImage {
                node {
                  sourceUrl
                  altText
                  sourceUrlSharp {
                    childImageSharp {
                      fluid {
                        base64
                        aspectRatio
                        src
                        srcSet
                        sizes
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  allWcProducts(filter: {categories: {elemMatch: {name: {eq: "Chocolate Chip Cookies"}}}}) {
    edges {
      node {
        id
        price
        name
        description
        average_rating
        rating_count
        short_description
        images {
          src
          alt
          name
          localFile {
            childImageSharp {
              fluid {
                base64
                srcSet
                aspectRatio
              }
            }
          }
        }
      }
    }
  }
}
`;

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const fetchPosts = async () => {
    return await graphql(GET_FRONT_PAGE)
      .then(({ data }) => {
        const { HWGraphQL: { pageBy }, allWcProducts: { edges } } = data;
        return { page: pageBy, products: edges };
      });
  };
  await fetchPosts().then(({ page, products }) => {
    createPage({
      path: '/',
      component: slash(frontPageTemplate),
      context: {
        page,
        products
      }
    });
  });
};