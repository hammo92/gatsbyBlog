import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'
import BrandList from '../components/BrandList'
import Brand from '../components/Brand'


import HomeSlide from '../components/Slick'

const Index = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges
  const hero = data.allContentfulHero.edges[0].node
  const brands = data.allContentfulBrand.edges
  const featuredPost = posts[0].node
  const { currentPage } = pageContext
  const isFirstPage = currentPage === 1

  return (
    <Layout>
      <SEO />
      {!isFirstPage && (
        <Helmet>
          <title>{`${config.siteTitle} - Page ${currentPage}`}</title>
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Helmet>
      )}

      <HomeSlide title={hero.title} image={hero.image} desc={hero.descriptionShort} height={'50vh'} />
      <BrandList>
        {brands.slice(0).map(({ node: brand }) => (
          <Brand key={brand.id} {...brand} />
        ))}
    </BrandList>
      <Container>



        {isFirstPage ? (
          <CardList>
            <Card {...featuredPost} featured />
            {posts.slice(1).map(({ node: post }) => (
              <Card key={post.id} {...post} />
            ))}
          </CardList>
        ) : (
          <CardList>
            {posts.map(({ node: post }) => (
              <Card key={post.id} {...post} />
            ))}
          </CardList>
        )}
      </Container>
      <Pagination context={pageContext} />
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulPost(
      sort: { fields: [publishDate], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          body {
            childMarkdownRemark {
              timeToRead
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
    allContentfulHero(
      limit: $limit
      skip: $skip
    ){
      edges{
        node{
          title
          descriptionShort
          image {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }

    }
    allContentfulBrand(
      limit: $limit
      skip: $skip
    ){
      edges{
        node{
          brandName
          logo {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }

    }

  }
`

export default Index
