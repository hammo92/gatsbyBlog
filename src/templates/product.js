import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import SEO from '../components/SEO'

  const ProductTemplate = ({ data, pageContext }) => {
  const{
    productName,
    slug,
    productImages,
    description,
    departments,
  } = data.contentfulProduct
  const postNode = data.contentfulProduct
  console.log({departments})

  return (
    <Layout>
      <Helmet>
        <title>{`${productName} - ${config.siteTitle}`}</title>
      </Helmet>
      <Hero title={productName} image={productImages[0]} height={'50vh'} />
      <Container>
        <PageBody body={description} />


      </Container>

    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      slug
      productName
      description {
        childMarkdownRemark {
          html
        }
      }

      productImages {
        fluid(maxWidth: 1800) {
           ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    
    }
  }
`

export default ProductTemplate
