const config = require('./src/utils/siteConfig')
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions


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

  return Promise.all([ loadPages, loadCaseStudies, loadProducts])
}
