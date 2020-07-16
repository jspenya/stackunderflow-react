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
  return(
    <div className="row">
      <div className="col-md-12">
        <Wrapper>
        <div><post_title>{title}</post_title></div>
        <Body><post_body>{body}</post_body></Body>
        </Wrapper>
      </div>
    </div>
  ) 
}

export default Header