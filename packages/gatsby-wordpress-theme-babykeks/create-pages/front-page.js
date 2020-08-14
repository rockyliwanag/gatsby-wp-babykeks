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
    posts(first: 3) {
      nodes {
        id
        title
        excerpt
        date
        uri
        featuredImage {
          node {
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
        }
      }
    }
    allPosts: posts(first: 5000) {
      nodes {
        id
        title
        content
        date
        uri
        author {
          node {
            name
          }
        }
        categories {
          edges {
            node {
              name
            }
          }
        }
        featuredImage {
          node {
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
        const { HWGraphQL: { pageBy, posts } } = data;
        return { page: pageBy, posts: posts.nodes };
      });
  };
  await fetchPosts().then(({ page, posts }) => {
    createPage({
      path: '/',
      component: slash(frontPageTemplate),
      context: {
        page,
        posts
      }
    });
  });
};