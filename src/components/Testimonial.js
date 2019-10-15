import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Post = styled.li`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background 0.2s;
  background:#9599a4;
  color:#ffffff;
`

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 800;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
`
const Reviewer = styled.h3`
  font-size: 1em;
  font-weight: 800;
  text-transform: capitalize;
  margin: 1rem 1rem 0rem 0rem;
`

const ReviewerWrap = styled.div`
  display:flex;
  flex-direction:row;
  width: 100%;
  align-items:center;
`


const Company = styled.h3`
  font-size: 1em;
  font-weight: 400;
  text-transform: capitalize;
  margin: 0.2rem 1rem 0.5rem 0rem;
`

const Review = styled.p`
  margin: 0 1rem 1rem 1rem;
  line-height: 1.6;
`
const Avatar = styled(Img)`
  width:50px;
  border-radius:50%;
  margin:1rem 1rem 0.5rem 1rem
`
const Testimonial = ({
  title,
  avatar,
  content,
  name,
  company,
  ...props
}) => {
  return (
    <Post>
        <div>
        <Title>{title}</Title>
        <Review>{content}</Review>
        </div>
        <ReviewerWrap>
        <Avatar fluid={avatar.fluid} backgroundColor={'#eeeeee'} />
          <div>
            <Reviewer>{name}</Reviewer>
            <Company>{company}</Company>
          </div>

        </ReviewerWrap>
    </Post>
  )
}

export default Testimonial
