import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div `
  border-bottom: 0.5px solid #d0cdcd;
`

const Body = styled.div `
  margin-bottom: 20px; 
  margin-top: 10px; 
`

const Header = (props) => {

  const {title, body} = props.attributes

  const total = props.comments.length

  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric"
  });
  

  return(
    <div className="row">
      <div className="col-md-12">
        <Wrapper>
        <div className="post_title">{title}</div>
        <div className="commented_by">Posted on {formatter.format(Date.parse(props.attributes.created_at))}</div>
        <Body>{body}</Body>
        </Wrapper>
      </div>
    </div>
  ) 
}

export default Header