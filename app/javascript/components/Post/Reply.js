import React, { useState, useEffect } from 'react'
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
  border-left: 1px solid #d4d0d0;
  padding-right: 50px;
`

const Flex = styled.div`
  width: 500px;
  // height: 50px;
  display: flex;
  flex: 1;
  padding-left: 5px;
`

const Reply = (props) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric"
  });
  
  return(
      <div className="row pt-2 pb-2">
          <div className="col-md-12">
            <Border>
            <Flex>
              <div className="reply_link">{props.attributes.body}</div>
            </Flex>
              {/* <commented_by>Posted on {formatter.format(Date.parse(props.attributes.created_at))}</commented_by> */}
            </Border>
        </div>
      </div>
  )
}

export default Reply