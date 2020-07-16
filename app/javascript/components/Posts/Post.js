import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0;
  background: #fff;
  color: #333 !important;
  padding: 5px 10px;
  font-size: 18px;
  box-shadow: 0px 0px 0px 3px #473228,
    -6px 6px #ef5f17,
    -6px 6px 0px 3px #473228;
`
const Border = styled.div`
  border-bottom: 1px solid #d4d0d0;
`

const Post = (props) => {
  return(
    <div className="row pt-2 pb-2">
      <div className="col-md-2"></div>
        <div className="col-md-8">
          <Border>
            <post_title><Link to={`/posts/${props.attributes.id}`}>{props.attributes.title}</Link></post_title>
            <p>{props.attributes.body}</p>
            <div className="cta-wrapper">
            <div className="col-md-2"></div>
        </div>
          </Border>
      </div>
    </div>
  )
}

export default Post