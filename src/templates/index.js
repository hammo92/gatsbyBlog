import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CardList from '../components/CardList'
import CaseCard from '../components/CaseCard'
import ProductCard from '../components/ProductCard'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'
import BrandList from '../components/BrandList'
import Brand from '../components/Brand'
import TestimonialList from '../components/TestimonialList'
import Testimonial from '../components/Testimonial'
import FeatureBlock from '../components/Feature'
import ServiceStep from '../components/ServiceStep'
import CtaBanner from '../components/CtaBanner'
import Slider from "react-slick"
import { useMediaQuery } from 'react-responsive'


import HomeSlide from '../components/Slick'


const Index = ({ data }) => {
  const posts = data.allContentfulCaseStudy.edges
  const products = data.allContentfulProduct.edges
  const hero = data.allContentfulHero.edges[0].node
  const brands = data.allContentfulBrand.edges
  const testimonials = data.allContentfulTestimonial.edges
  const featureBlockA = data.allContentfulFeatureBlock.edges[0].node
  const serviceSteps = data.allContentfulServiceStep.edges
  const featuredPost = posts[0].node
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 50em)' })
  const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: isTabletOrMobile ? 1: 3,
      slidesToScroll: isTabletOrMobile ? 1 : 3,
      centerPadding: '60px',
    };

  return (
    <Layout>
      <SEO />
        <Helmet>
          <title>{config.siteTitle}</title>
        </Helmet>


      <HomeSlide title={hero.title} image={hero.image} desc={hero.descriptionShort} height={'50vh'} />
      <BrandList>
        {brands.slice( 0 ).map(({ node: brand }) => (
          <Brand key={brand.id} {...brand} />
        ))}
      </BrandList>
      <TestimonialList>
        {testimonials.slice(isTabletOrMobile ? 2 : 0).map(({ node: testimonial }) => (
          <Testimonial key={testimonial.id} {...testimonial} />
        ))}
      </TestimonialList>
      <Container>
        <FeatureBlock  {...featureBlockA}/>
      </Container>

      <Container style={{background: '#f4f6f9'}} header="how it works">
      <Slider {...settings}>


        {serviceSteps.slice(0).map(({ node: serviceStep }) => (
          <ServiceStep key={serviceStep.id} {...serviceStep} />
        ))}
      </ Slider>
      </Container>
      <CtaBanner text={"Get started today"} buttonText={"Contact us"} slug={"contact"}/>

      <Container header="Case Studies">
        <CardList>
          {posts.slice(0).map(({ node: post }) => (
            <CaseCard key={post.id} {...post} />
          ))}
        </CardList>

      </ Container>
      <Container header="Popular Products">
      <CardList>
        {products.slice(0).map(({ node: product }) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </CardList>

    </ Container>

    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {

    allContentfulCaseStudy(
      sort: { fields: [projectDate], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          slug
          customer
          projectDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          requirements {
            childMarkdownRemark {
              timeToRead
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
    allContentfulProduct(
      limit: 17
      skip: $skip
    ) {
      edges {
        node {
          slug
          productName
          description {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 320)
            }
          }

          productImages {
            fluid(maxWidth: 1800) {
               ...GatsbyContentfulFluid_withWebp_noBase64
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
      sort: {fields: order, order: ASC}
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
