import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'


const Tag = (props) => {
  return(
    <div className="post_tags">Tags: {props.attributes.name}</div>
  )
}


export default Tag