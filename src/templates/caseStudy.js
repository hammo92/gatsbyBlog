import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import TagList from '../components/TagList'
import PostLinks from '../components/PostLinks'
import PostDetails from '../components/PostDetails'
import SEO from '../components/SEO'

  const CaseStudyTemplate = ({ data, pageContext }) => {
  const{
    title,
    slug,
    heroImage,
    customer,
    requirements,
    solutions,
    results,
    projectDate,
  } = data.contentfulCaseStudy
  const postNode = data.contentfulCaseStudy

  const previous = pageContext.prev
  const next = pageContext.next
  function readTime(a,b,c){
    return a+b+c
  }


  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>

      <Hero title={title} image={heroImage} height={'50vh'} />

      <Container>
        <PostDetails
          date={projectDate}
          timeToRead={readTime(requirements.childMarkdownRemark.timeToRead,solutions.childMarkdownRemark.timeToRead,results.childMarkdownRemark.timeToRead)}
        />
        <Container header="Requirements" />
        <PageBody body={requirements} />
        <Container header="Solutions" />
        <PageBody body={solutions} />
        <Container header="Results" />
        <PageBody body={results} />
      </Container>
      <PostLinks previous={previous} next={next} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulCaseStudy(slug: { eq: $slug }) {
      title
      slug
      customer
      meta {
        internal {
          content
        }
      }
      projectDate(formatString: "MMMM DD, YYYY")
      projectDateISO: projectDate(formatString: "YYYY-MM-DD")
      heroImage {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
          width
          height
        }
      }
      requirements {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
          timeToRead
        }
      }
      solutions {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
      results {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
    }
  }
`

export default CaseStudyTemplate
