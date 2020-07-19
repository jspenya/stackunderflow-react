import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'
import Styles from '../Styles.css'

const Border = styled.div`
  border-bottom: 1px solid #d4d0d0;
  padding-top: 20px;
  padding-bottom: 5px;
`

const Post = (props) => {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric"
  });

  return(
        <Border>
          <post_title><Link to={`/posts/${props.attributes.id}`}>{props.attributes.title}</Link></post_title>
          <p>{props.attributes.body}</p>
          <p>{props.attributes.tag}</p>
          <p>Posted on {formatter.format(Date.parse(props.attributes.created_at))}</p>
        </Border>
  )
}

export default Post