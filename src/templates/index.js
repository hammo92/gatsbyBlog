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
import TestimonialList from '../components/TestimonialList'
import Testimonial from '../components/Testimonial'
import FeatureBlock from '../components/Feature'
import ServiceStep from '../components/ServiceStep'


import HomeSlide from '../components/Slick'

const Index = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges
  const hero = data.allContentfulHero.edges[0].node
  const brands = data.allContentfulBrand.edges
  const testimonials = data.allContentfulTestimonial.edges
  const featureBlockA = data.allContentfulFeatureBlock.edges[0].node
  const serviceSteps = data.allContentfulServiceStep.edges
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
      <TestimonialList>
        {testimonials.slice(0).map(({ node: testimonial }) => (
          <Testimonial key={testimonial.id} {...testimonial} />
        ))}
      </TestimonialList>
      <Container>
        <FeatureBlock  {...featureBlockA}/>
        {serviceSteps.slice(0).map(({ node: serviceStep }) => (
          <ServiceStep key={serviceStep.id} {...serviceStep} />
        ))}





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
    allContentfulTestimonial(
      limit: $limit
      skip: $skip
    ){
      edges{
        node{
          title
          content
          name
          company
          avatar {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }

    }
    allContentfulFeatureBlock(
      limit: $limit
      skip: $skip
    ){
      edges{
        node{
          title
          content{
            childMarkdownRemark {
              html
            }
          }
          subTitle
          featImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }

    }
    allContentfulServiceStep(
      sort: {fields: id}
      limit: $limit
      skip: $skip
    ){
      edges{
        node{
          title
          description
          order
          image {
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
