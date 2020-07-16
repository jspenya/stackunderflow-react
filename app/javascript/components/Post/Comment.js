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

const Flex = styled.div`
  width: 500px;
  height: 50px;
  display: flex;
  flex: 1;
`

const Comment = (props) => {
  return(
      <div className="row pt-2 pb-2">
          <div className="col-md-12">
            <Border>
            <Flex>
              <comment_body><p>{props.attributes.body}</p></comment_body>
              <div className="cta-wrapper"></div>
            </Flex>
            </Border>
        </div>
      </div>
  )
}

export default Comment