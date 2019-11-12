const config = require('./src/utils/siteConfig')
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const loadPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPost(
          sort: { fields: [publishDate], order: DESC }
          limit: 10000
        ) {
          edges {
            node {
              slug
              publishDate
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allContentfulPost.edges
      const postsPerFirstPage = config.postsPerHomePage
      const postsPerPage = config.postsPerPage
      const numPages = Math.ceil(
        posts.slice(postsPerFirstPage).length / postsPerPage
      )

      // Create main home page
      createPage({
        path: `/`,
        component: path.resolve(`./src/templates/index.js`),
        context: {
          limit: postsPerFirstPage,
          skip: 0,
          numPages: numPages,
          currentPage: 1,
        },
      })



      // Create each individual post
      posts.forEach((edge, i) => {
        const prev = i === 0 ? null : posts[i - 1].node
        const next = i === posts.length - 1 ? null : posts[i + 1].node
        createPage({
          path: `${edge.node.slug}/`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: edge.node.slug,
            prev,
            next,
          },
        })
      })
      resolve()
    })
  })

  const loadCaseStudies = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulCaseStudy {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      const caseStudy = result.data.allContentfulCaseStudy.edges
      caseStudy.map(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component: path.resolve(`./src/templates/caseStudy.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  const loadProducts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulProduct {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      const product = result.data.allContentfulProduct.edges
      product.map(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component: path.resolve(`./src/templates/product.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  
  const loadPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      const pages = result.data.allContentfulPage.edges
      pages.map(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  return Promise.all([loadPosts, loadPages, loadCaseStudies, loadProducts])
}
