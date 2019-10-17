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
    title,
    slug,
    heroImage,
    customer,
    requirements,
    solutions,
    results,
    images,
    projectDate,
    tags,
  } = data.contentfulCaseStudy
  const postNode = data.contentfulCaseStudy

  const previous = pageContext.prev
  const next = pageContext.next

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} postSEO />

      <Hero title={title} image={heroImage} height={'50vh'} />

      <Container>
        {tags && <TagList tags={tags} />}
        <PostDetails
          date={projectDate}
          timeToRead={'5 min'}
        />
        <PageBody body={requirements} />
        <PageBody body={solutions} />
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
      projectDateISO: publishDate(formatString: "YYYY-MM-DD")
      tags {
        title
        id
        slug
      }
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
        }
      }
      solutions {
        childMarkdownRemark {
          html
        }
      }
      results {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default CaseStudyTemplate
